const { UserModel } = require("../../model/user.model");
const RandomNumberGenerator = require("../../utils/function");

async function getOtp (call, callback) {
    try {
        const {phone, password} = call.request;
        const code = RandomNumberGenerator()
        await UserModel.findOne({phone, password})
        const result = await updateUser(code, phone)
        if(!result) return callback(error, null);
        return callback(null, {code});
    } catch (error) {
        callback(error, null);
    }
}
async function checkOTP (call, callback) {
    try {   

    } catch (error) {
        callback(error, null);
    }
}
async function refreshToken (call, callback) {
    try {

    } catch (error) {
        callback(error, null)
    }
}
async function updateUser (code, phone) {
    try {
        let otp = {
            code,
            expiresIn : (new Date().getTime() + 120000),
        }
        return (await UserModel.updateOne({phone}, {$set : otp}))
    } catch (error) {
        callback(error, null)
    }
}


module.exports = {
    getOtp,
    checkOTP,
    refreshToken
}