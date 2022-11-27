import { Router } from "express";
import { deleteObjectsInCart, getObjectsInCart, postInCart } from "../controllers/myCart.controller.js";
import { myCarDeleteTokenValidation, myCartPostTokenValidation } from "../middlewares/myCart.middleware.js";

const router = Router(); 

router.delete("/myCart/:token", myCarDeleteTokenValidation, deleteObjectsInCart)
// Validação de modelos para post in Cart
router.use(myCartPostTokenValidation)
router.post("/myCart", postInCart)
router.get("/myCart", getObjectsInCart)

export default router;