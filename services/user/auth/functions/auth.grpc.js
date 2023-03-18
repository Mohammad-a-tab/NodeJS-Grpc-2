const { UserModel } = require("../../model/user.model")

async function RegisterUser (call, callback) {
    try {

    } catch (error) {
        callback(error, null);
    }
}
async function getOtp (call, callback) {
    try {

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
async function saveUser (call, callback) {
    try {
        
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
    RegisterUser,
    getOtp,
    checkOTP,
    refreshToken,
    saveUser,
    updateUser
}