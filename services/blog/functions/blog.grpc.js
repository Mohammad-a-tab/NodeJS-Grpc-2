const { BlogModel } = require("../model/blog.model")

async function getListBlog (call, callback) {
    try {
        const products = await ProductModel.find({});
        callback(null, {products})
    } catch (error) {
        callback(error, null);
    }
}
async function getBlog (call, callback) {
    try {
        const {id} = call.request;
        const product = await ProductModel.findOne({id});
        callback(null, product) 
    } catch (error) {
        callback(error, null);
    }
}
async function createBlog (call, callback) {
    try {
        const {title, price} = call.request;
        await ProductModel.create({title, price})
        callback(null, {status: 'Created'})
    } catch (error) {
        callback(error, null);
    }
}
async function updateBlog (call, callback) {
    try {
        const {id, title, price} = call.request;
        const product = await ProductModel.findOne({id});
        if(product) await ProductModel.updateOne({id}, {$set : {title, price}})
        callback(null, {status: 'Updated'})
    } catch (error) {
        callback(error, null)
    }
}
async function deleteBlog (call, callback) {
    try {
        let result
        const {id} = call.request;
        const product = await ProductModel.findOne({id})
        if(product) result =  await ProductModel.deleteOne({id})
        if(result.deletedCount > 0) callback(null, {status: 'Deleted'})
        return callback({message: "cannot delete product"}, null)
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