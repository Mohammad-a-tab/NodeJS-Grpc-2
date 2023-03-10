const { ProductModel } = require("../model/product.model")

async function listProduct (call, callback) {
    try {
        const products = await ProductModel.find({});
        callback(null, {products})
    } catch (error) {
        callback(error, null);
    }
}
async function getProduct (call, callback) {}
async function createProduct (call, callback) {}
async function updateProduct (call, callback) {}
async function deleteProduct (call, callback) {}

module.exports = {
    listProduct,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}