const { UserModel } = require("../../model/user.model")

async function registerUser (call, callback) {
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
    registerUser,
    getOtp,
    checkOTP,
    refreshToken,
    saveUser,
    updateUser
}