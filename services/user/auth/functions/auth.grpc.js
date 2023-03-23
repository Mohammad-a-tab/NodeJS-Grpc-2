const { UserModel } = require("../../model/user.model");
const RandomNumberGenerator = require("../../utils/function");

async function getOtp (call, callback) {
    try {
        const {phone, password} = call.request;
        const code = RandomNumberGenerator()
        await UserModel.findOne({phone, password})
        const result = await saveUser(code, phone)
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
async function saveUser (code, phone) {
    try {
        let otp = {
            code,
            expiresIn : (new Date().getTime() + 120000),
        }
        const result = await this.checkExistIUser(mobile);
        if(result){
              
            return (await this.updateUser(mobile , {otp}))
                
        }
        return !!(await UserModel.create({mobile,otp,Role : ROLES.USER}))
    } catch (error) {
        callback(error, null)
    }
}
async function updateUser (call, callback) {
    try {
        
    } catch (error) {
        callback(error, null)
    }
}

module.exports = {
    getOtp,
    checkOTP,
    refreshToken,
    saveUser,
    updateUser
}