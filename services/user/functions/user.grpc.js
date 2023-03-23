const { UserModel } = require("../model/user.model");

async function registerUser (call, callback) {
    try {
        const {firstName, lastName, email, password, phone} = call.request;
        await UserModel.create({firstName, lastName, email, password, phone});
        callback(null, {message: 'successfully registered'})
    } catch (error) {
        callback(error, null)
    }
}
async function getListOfUser (call, callback) {
    try {
        
    } catch (error) {
        callback(error, null)
    }
}
async function getUser (call, callback) {
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
async function deleteUser (call, callback) {
    try {
        
    } catch (error) {
        callback(error, null)
    }
}
module.exports = {
    registerUser,
    getListOfUser,
    getUser,
    updateUser,
    deleteUser
}