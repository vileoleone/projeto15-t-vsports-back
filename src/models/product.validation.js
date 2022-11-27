import joi from "joi";

export const productSchemaValidation = joi.object({
    userName: joi.string().required().min(3).trim().messages({
        'string.base': `"userName" should be a type of 'text'`,
        'string.empty': `"userName" cannot be empty`,
        'string.min': `"userName" should have a minimum length of {3} letters`,
        'any.required': `"userName" is required`,
        'string.trim': `There cannot be empty spaces before or after the Username`
    }),
    email: joi.string().email().required().trim().messages({
        'string.base': `"email" should be a type of 'text'`,
        'string.empty': `email" cannot be empty`,
        'string.min': `"email" should have a minimum length of {3} letters`,
        'any.required': `"email" is required`,
        'string.trim': `There cannot be empty spaces before or after the email`
    }),
    password: joi.any().required().
        messages({
            'number.base': `"password" should be only a 'number'`,
            'number.empty': `"password" cannot be empty`,
            'any.required': `"password" is required`,
        }),
    password_confirmation: joi.any().equal(joi.ref('password'))
        .required()
        .label('Confirm password')
        .messages({ 'any.only': '{{#label}} does not match' })
});

export const signInSchemaValidation = joi.object({
    login: joi.alternatives().try(
        joi.string().lowercase().email(),
        joi.string().min(3)
    )
        .required(),

    password: joi.any().required().
        messages({
            'number.base': `"password" should be only a 'number'`,
            'number.empty': `"password" cannot be empty`,
            'any.required': `"password" is required`,
        }),

});
