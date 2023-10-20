const Joi = require("joi")

const registerValidation =  Joi.object({
    firstname:Joi.string().required(),
    surname:Joi.string().required(),
    password:Joi.string().required(),
    email:Joi.string().required(),
})

const loginValidation  =  Joi.object({
    password:Joi.string().required(),
    email:Joi.string().required(),
})

module.exports = {
    registerValidation,
    loginValidation
}