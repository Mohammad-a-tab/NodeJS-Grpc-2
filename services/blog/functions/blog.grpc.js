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
        const {title, price} = call.request;
        await BlogModel.create({title, price})
        callback(null, {status: 'Created'})
    } catch (error) {
        callback(error, null);
    }
}
async function updateBlog (call, callback) {
    try {
        const {id, title, price} = call.request;
        const blog = await BlogModel.findOne({id});
        if(blog) await BlogModel.updateOne({id}, {$set : {title, price}})
        callback(null, {status: 'Updated'})
    } catch (error) {
        callback(error, null)
    }
}
async function deleteBlog (call, callback) {
    try {
        let result
        const {id} = call.request;
        const blog = await BlogModel.findOne({id})
        if(blog) result =  await BlogModel.deleteOne({id})
        if(result.deletedCount > 0) callback(null, {status: 'Deleted'})
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