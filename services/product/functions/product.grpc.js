const { ProductModel } = require("../model/product.model")

async function listProduct (call, callback) {
    try {
        const products = await ProductModel.find({});
        callback(null, {products})
    } catch (error) {
        callback(error, null);
    }
}
async function getProduct (call, callback) {
    try {
        const {id} = call.request;
        const product = await ProductModel.findOne({id});
        console.log(product);
        callback(null, product) 
    } catch (error) {
        callback(error, null);
    }
}
async function createProduct (call, callback) {
    try {
        const {title, price} = call.request;
        await ProductModel.create({title, price})
        callback(null, {status: 'Created'})
    } catch (error) {
        callback(error, null);
    }
}
async function updateProduct (call, callback) {
    try {
        
    } catch (error) {
        callback(error, null)
    }
}
async function deleteProduct (call, callback) {}

module.exports = {
    listProduct,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}