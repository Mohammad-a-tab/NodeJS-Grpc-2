const { default: mongoose } = require("mongoose")
const UserSchema = new mongoose.Schema({
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    email: {type: String},
    phone: {type: String, required: true},
    password: {type: String, required: true},
    Role : {type : String, default : "USER"},
    otp : {type : Object, default : {
        code : 0,
        expiresIn : 0
    }}
}, {
    timestamps : true,
    toJSON : {
        virtuals : true
    }
})
module.exports = {
    UserModel : mongoose.model("user", UserSchema)
}