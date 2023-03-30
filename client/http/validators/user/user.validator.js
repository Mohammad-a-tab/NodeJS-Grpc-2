const createError = require("http-errors");
const Joi = require("@hapi/joi");

const CreateUserSchema = Joi.object({
    firstName : Joi.string().error(createError.BadRequest("The firstName is not correct")), 
    lastName : Joi.string().error(createError.BadRequest("The lastName is not correct")),
    email : Joi.string().email().error(createError.BadRequest("The email is not correct")),
    phone : Joi.string().min(11).max(11).error(createError.BadRequest("The phone is not correct")),
    password : Joi.string().min(4).max(16).error(createError.BadRequest("The password is not correct"))
})
const UpdateUserSchema = Joi.object({
    firstName : Joi.string().allow("").error(createError.BadRequest("The firstName is not correct")), 
    lastName : Joi.string().allow("").error(createError.BadRequest("The lastName is not correct")),
    email : Joi.string().allow('').email().allow('').error(createError.BadRequest("The email is not correct")),
    phone : Joi.string().allow('').min(11).max(11).allow('').error(createError.BadRequest("The phone is not correct")),
    password : Joi.string().allow('').min(4).max(16).allow('').error(createError.BadRequest("The password is not correct"))
})
module.exports = {
    CreateUserSchema,
    UpdateUserSchema
}