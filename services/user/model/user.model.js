const { default: mongoose } = require("mongoose")
const UserSchema = new mongoose.Schema({
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    email: {type: String},
    phone: {type: String, required: true},
    password: {type: String, required: true}
})
module.exports = {
    UserModel : mongoose.model("user", UserSchema)
}