import { Router } from "express";
import {  signIn,  signUp} from "../controllers/auth.controllers.js"
import { checkuserNameAndEmail, signInBodyValidation, SignInSchemaValidation, SignUpBodyValidation } from "../middlewares/Auth.Validation.middleware.js";
const router = Router();

router.post("/sign-up", SignUpBodyValidation, checkuserNameAndEmail, signUp);
router.post("/sign-in", SignInSchemaValidation, signInBodyValidation, signIn);


export default router;