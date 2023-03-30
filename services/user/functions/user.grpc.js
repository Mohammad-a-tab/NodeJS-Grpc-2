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
        const users = await UserModel.find({});
        callback(null, {users})
    } catch (error) {
        callback(error, null)
    }
}
async function getUser (call, callback) {
    try {
        const {id} = call.request;
        const user = await UserModel.findById({_id : id});
        callback(null, {user})
    } catch (error) {
        callback(error, null)
    }
}
async function updateUser (call, callback) {
    try {
        const {firstName, lastName, email, phone, id} = call.request;
        await UserModel.findById({_id: id})
        const result = await UserModel.updateOne({_id: id}, {$set : {firstName, lastName, email, phone}})
        if(result.modifiedCount > 0) {
            callback(null, {status: "200", message: "successfully updated"})
        }
        callback(null, {status: "400", message: "Unsuccessful"})
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
            callback(null, {status: "200", message: "successfully deleted"})
        }
        callback(null, {status: "400", message: "Unsuccessful"})
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