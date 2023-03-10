class ProductGRPC {
async listProduct (call, callback) {}
async getProduct (call, callback) {}
async createProduct (call, callback) {}
async updateProduct (call, callback) {}
async deleteProduct (call, callback) {}

}
module.exports = {
    ProductGRPC : new ProductGRPC()
}