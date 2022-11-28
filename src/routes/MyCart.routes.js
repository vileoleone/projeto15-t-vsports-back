import { Router } from "express";
import { deleteObjectsInCart, deleteProductsInCart, getObjectsInCart, postInCart } from "../controllers/myCart.controller.js";
import { myCartDeleteProductValidation, myCartDeleteTokenValidation, myCartPostTokenValidation } from "../middlewares/myCart.middleware.js";

const router = Router(); 

router.delete("/myCart/:token", myCartDeleteTokenValidation, deleteObjectsInCart)
// Validação de modelos para post in Cart
router.use(myCartPostTokenValidation)
router.post("/myCart", postInCart)
router.get("/myCart", getObjectsInCart)
/* outer.patch("/myCart/delete/:product_id", myCartDeleteProductValidation, deleteProductsInCart) */

export default router;