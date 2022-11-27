import { Router } from "express";
import { getObjectsInCart, postInCart } from "../controllers/myCart.controller.js";
import { myCartPostTokenValidation } from "../middlewares/myCart.middleware.js";

const router = Router(); 



router.post("/myCart",myCartPostTokenValidation, postInCart)
router.get("/myCart", myCartPostTokenValidation, getObjectsInCart)


export default router;