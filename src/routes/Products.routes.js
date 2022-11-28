import { Router } from "express";
import { getProducts, postProducts } from "../controllers/products.controllers.js";
import { ProductBodyValidation, checkObjProduct } from "../middlewares/Product.Validation.middlerware.js";
const router = Router();

router.post("/products", ProductBodyValidation, checkObjProduct, postProducts);
router.get("/products", getProducts);

export default router;