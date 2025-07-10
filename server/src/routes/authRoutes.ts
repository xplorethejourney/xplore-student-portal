import { Router } from "express";
import { deleteUser, signin, signup, verifyTokenAndRedirect } from "../controllers/authController";

const router = Router();

router.post("/signup",signup)
router.post("/signin",signin)
router.delete("/delete",deleteUser)
router.get("/signup/verify/",verifyTokenAndRedirect)
export default router