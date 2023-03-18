const { default: mongoose } = require("mongoose")
const UserSchema = new mongoose.Schema({

})
module.exports = {
    UserModel : mongoose.model("user", UserSchema)
}