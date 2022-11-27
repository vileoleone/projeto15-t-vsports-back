import joi from "joi";

export const productSchemaValidation = joi.object({
    productName: joi.string().required().min(3).max(40).trim(),
    description: joi.string().required().min(3).max(100),
    brand: joi.string().trim().required(),
    category: joi.string().required().valid("camiseta", "chuteira", "bermuda"),
    price: joi.number().required(),
    country: joi.string().min(3).max(30).required().trim(),
    image: joi.string().required()
})
