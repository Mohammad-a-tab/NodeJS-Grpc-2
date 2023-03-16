const { BlogModel } = require("../model/blog.model")

async function getListBlog (call, callback) {
    try {
        const blogs = await BlogModel.find({});
        callback(null, {blogs})
    } catch (error) {
        callback(error, null);
    }
}
async function getBlog (call, callback) {
    try {
        const {id} = call.request;
        const blog = await BlogModel.findOne({id});
        callback(null, blog) 
    } catch (error) {
        callback(error, null);
    }
}
async function createBlog (call, callback) {
    try {
        const {title, text, tags, image} = call.request;
        await BlogModel.create({title, text, tags, image})
        callback(null, {status: 'Created'})
    } catch (error) {
        callback(error, null);
        console.log(error);
    }
}
async function updateBlog (call, callback) {
    try {
        const {id, title, text, tags, image} = call.request;
        await BlogModel.findOne({id});
        const results =  await BlogModel.updateOne({id}, {$set : {title, text, tags, image}})
        if(results.modifiedCount > 0) callback(null, {status: 'Updated'})
    } catch (error) {
        callback(error, null)
    }
}
async function deleteBlog (call, callback) {
    try {
        const {id} = call.request;
        await BlogModel.findOne({id})
        const results =  await BlogModel.deleteOne({id})
        if(results.deletedCount > 0) callback(null, {status: 'Deleted'})
        return callback({message: "cannot delete blog"}, null)
    } catch (error) {
        callback(error, null)
    }
}

module.exports = {
    getListBlog,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
}