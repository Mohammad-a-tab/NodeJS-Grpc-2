const createError = require("http-errors");
const Joi = require("@hapi/joi");

const UserSchema = Joi.object({
    firstName : Joi.string().error(createError.BadRequest("The firstName is not correct")), 
    lastName : Joi.string().error(createError.BadRequest("The lastName is not correct")),
    email : Joi.string().email().error(createError.BadRequest("The email is not correct")),
    phone : Joi.string().min(11).max(11).error(createError.BadRequest("The phone is not correct")),
    password : Joi.string().min(4).max(16).error(createError.BadRequest("The password is not correct"))
})
module.exports = {
    UserSchema
}