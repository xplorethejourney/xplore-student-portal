import { Router } from "express";
import { deleteUser, forgotPasswordLink, ResetPasswordAndRedirect, signin, signout, signup, verifyTokenAndRedirect } from "../controllers/authController";


const router = Router();

router.post("/signup",signup)
router.post("/signin",signin)
router.delete("/delete",deleteUser)
router.get("/signup/verify/",verifyTokenAndRedirect)
router.post("/signout",signout)
router.post("/signin/requestPasswordReset",forgotPasswordLink)
router.post("/signin/PasswordReset",ResetPasswordAndRedirect)
export default router