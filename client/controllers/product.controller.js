const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path")
const productProtoPath = path.join(__dirname, "..", "..", "protos", "product.proto");
const productProto = protoLoader.loadSync(productProtoPath);
const {ProductPackage}  = grpc.loadPackageDefinition(productProto);
const productServiceURL = "localhost:4001";
const productClient = new ProductPackage.ProductService(productServiceURL, grpc.credentials.createInsecure());

class ProductController {
    getListProduct (req, res, next) {
        productClient.listProduct(null, (err, data) => {
            if(err) return next(err);
            return res.status(200).json(data); 
        })
    }
    getProduct (req, res, next) {}
    createProduct (req, res, next) {
        try {
            const {title, price} = req.body;
            productClient.createProduct({title, price}, (err, data) => {
                if(err) return next(err);
                return res.status(201).json(data); 
            })
        } catch (error) {
            next(error)
        }
    }
    updateProduct (req, res, next) {}
    deleteProduct (req, res, next) {}
}
module.exports = {
    ProductController : new ProductController()
}
