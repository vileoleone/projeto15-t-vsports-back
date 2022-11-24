import { Router } from "express";
import { /* signIn */ signUp } from "../controllers/auth.controllers.js"
import { checkuserNameAndEmail, SignUpBodyValidation } from "../middlewares/Auth.Validation.middleware.js";
const router = Router();

router.post("/sign-up", checkuserNameAndEmail, SignUpBodyValidation, signUp);
//router.post("/sign-in", signInSchemaValidation, signIn);

export default router;