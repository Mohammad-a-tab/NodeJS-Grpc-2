const { RandomNumberGenerator, SignAccessToken, SignRefreshToken, verifyRefreshToken} = require("../../utils/function");
const { UserModel } = require("../../model/user.model");
const { ValidatingPassword } = require("../../../../client/utils/function");

async function getOtp (call, callback) {
    try {
        const {phone, password} = call.request;
        const user =  await UserModel.findOne({phone})
        if(user) {
            const validatePass = await ValidatingPassword(password, user.password)
            if(validatePass == true) {
                const code = RandomNumberGenerator()
                const result = await updateUser(code, phone)
                if(!result) return callback(null, {code: null, message: "Operation failed"});
                return callback(null, {code, message: "success"});
            }
            return callback(null, {code : null ,message: "Password is wrong"});   
        }
        return callback(null, {code : null ,message: "Invalid"});
    } catch (error) {
        callback(error, null);
    }
}
async function checkOTP (call, callback) {
    try {   
        const {phone, code} = call.request;
        const user = await UserModel.findOne({phone});
        if(!user) return callback(null, {message: "User not found"})
        if(user.otp.code != code) return callback(null, {message: "The code sent is not correct"});
        const now = Date.now();
        if(+user.otp.expiresIn < now) return callback(null, {message: ("Your code has expired")})
        const accessToken = await SignAccessToken(user._id);
        const refreshToken = await SignRefreshToken(user._id);
        return callback(null, {accessToken, refreshToken, message: "successfully signed"})
    } catch (error) {
        callback(error, null);
    }
}
async function refreshToken (call, callback) {
    try {
        const {refreshToken} = call.request;
        const phone = await verifyRefreshToken(refreshToken);
        const user = await UserModel.findOne({phone});
        const accessToken = await SignAccessToken(user?._id);
        const newRefreshToken = await SignRefreshToken(user?._id);
        return callback(null, {accessToken, refreshToken: newRefreshToken, message: "successfully signed"})
    } catch (error) {
        callback(error, null)
    }
}
async function updateUser (code, phone) {
    let otp = {
        code,
        expiresIn : (new Date().getTime() + 120000),
    }
    return (await UserModel.updateOne({phone}, {$set : {otp}}))
}


module.exports = {
    getOtp,
    checkOTP,
    refreshToken
}