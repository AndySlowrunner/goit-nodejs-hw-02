import Joi from "joi";

export const contactAddSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": `"name" must be exist`
    }),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    phone: Joi.string().required(),
});

export const contactUpdateSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    phone: Joi.string(),
});