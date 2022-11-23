import { Router } from "express";
import { signIn, signUp } from ""

const router = Router();

router.post("/sign-up", clientSchemaValidation, signUp);
router.post("/sign-in", signInSchemaValidation, signIn);

export default router;