const { UserModel } = require("../model/user.model");
const { deleteEmptyKeys } = require("../utils/function");

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
        const users = await UserModel.find({});
        callback(null, {users})
    } catch (error) {
        callback(error, null)
    }
}
async function getUser (call, callback) {
    try {
        const {id} = call.request;
        const user = await UserModel.findById({_id : id}, {firstName: 1, lastName: 1, email: 1, phone: 1});
        callback(null, user)
    } catch (error) {
        callback(error, null)
    }
}
async function updateUser (call, callback) {
    try {
        const data = call.request;
        deleteEmptyKeys(data)
        await UserModel.findById({_id: data.id})
        const result = await UserModel.updateOne({_id: data.id}, {$set : {...data}})
        if(result.modifiedCount > 0) return callback(null, {message: "successfully updated"})
        return callback(null, {message: "Unsuccessful"})
    } catch (error) {
        callback(error, null)
    }
}
async function deleteUser (call, callback) {
    try {
        const {id} = call.request;
        await UserModel.findById({_id: id})
        const result = await UserModel.deleteOne({_id: id})
        if(result) {
            callback(null, {message: "successfully deleted"})
        }
        callback(null, {message: "Unsuccessful"})
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