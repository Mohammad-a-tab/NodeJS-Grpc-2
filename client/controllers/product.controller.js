const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path")
const productProtoPath = path.join(__dirname, "..", "..", "protos", "product.proto");
const productProto = protoLoader.loadSync(productProtoPath);
const {ProductPackage}  = grpc.loadPackageDefinition(productProto);
const productServiceURL = "localhost:4001";
const productClient = new ProductPackage.ProductService(productServiceURL, grpc.credentials.createInsecure());

class ProductController {
    async getListProduct (req, res, next) {}
    async getProduct (req, res, next) {}
    async createProduct (req, res, next) {}
    async updateProduct (req, res, next) {}
    async deleteProduct (req, res, next) {}
}
module.exports = {
    ProductController : new ProductController()
}
