import { Response, Request, NextFunction } from "express";
import { UserModel } from "../model/schema";
import { errorHandler } from "../utils/errorHandler";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import { JwtPayload, SignupDTO, SigninDTO } from "../types/auth.types";
import { SendVerifyLink } from "../middleware/authMiddleware";

const jwtSecret = process.env.JWT_SECRET as string;

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | any> => {
  try {
    const { email } = req.body;
    if (!email) {
      return res
        .status(400)
        .json({ success: false, message: "Email is required" });
    }

    const deletedUser = await UserModel.findOneAndDelete({ email });
    if (!deletedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const signup = async (
  req: Request<{}, {}, SignupDTO>,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const { username, name, email, password } = req.body;

  console.log("Request received: ", req.body); // Log the incoming request body

  try {
    const isUserExist = await UserModel.findOne({ email }).lean();

    if (isUserExist && isUserExist.isVerified===true)
      return res
        .status(400)
        .json({ message: "user already exist", success: false });

    if (isUserExist && isUserExist.isVerified===false)
    { 
      await SendVerifyLink(email)
      .then(() => {
        res.status(200).json("Verification Link Sent to Email");
      })
      .catch(() => {
        res.status(408).json("Internal Server Error, Unable to send link");
      });
      return ;
    }

    await SendVerifyLink(email)
      .then(() => {
        res.send("Verification Link Sent to Email");
      })
      .catch(() => {
        res.send("Internal Server Error Unable to send link");
      });

    const hashedPassword = await hash(password, 10);

    const newUser = new UserModel({
      username,
      name,
      email,
      password: hashedPassword,
      isVerified: false,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

export const signin = async (
  req: Request<{}, {}, SigninDTO>,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  try {
    const validUser = await UserModel.findOne({ email }).lean();
    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    const validPassword = await compare(password, validUser.password); // Async version
    if (!validPassword) {
      return next(errorHandler(401, "Wrong credentials"));
    }

    const isVerified = validUser.isVerified
    if(!isVerified) {return res.status(401).json({error:"Verify your email first"}).redirect("http://localhost:8989/api/auth/signup")}

    const token = jwt.sign({ id: validUser._id }, jwtSecret, {
      expiresIn: "2d", //^ Token expires in 2 days
    });

    const { password: pass, ...rest } = validUser;

    res.cookie("access_token", token, { httpOnly: true }).status(200).json({
      success: true,
      message: "Login successful!",
      rest,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const verifyTokenAndRedirect = async (
  req: Request,
  res: Response
): Promise<Response | any> => {
  const userToken = req.query.token as string;

  if (!userToken) return res.status(401).json({ error: "Access Denied" });

  try {
    const payload = jwt.verify(userToken, jwtSecret) as { email: string };

    const updatedUser = await UserModel.findOneAndUpdate(
      { email: payload.email },
      { $set: { isVerified: true } }
    );
    if (!updatedUser) return res.status(404).json({ error: "user not found" });

    return res.redirect("http://localhost:8989/signin?verified=true");
  } catch (error) {
    console.error(
      "Error in verifytoken ",
      error instanceof Error ? error.message : error
    );
  }
};

export const signout = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    res.clearCookie("access_token");
    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    next(error);
  }
};

export default {
  signup,
  signin,
  signout,
  deleteUser,
  verifyTokenAndRedirect,
};
