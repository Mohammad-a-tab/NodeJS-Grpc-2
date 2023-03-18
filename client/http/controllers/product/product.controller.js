const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path")
const productProtoPath = path.join(__dirname, "..", "..", "..", "protos", "product.proto");
const productProto = protoLoader.loadSync(productProtoPath);
const {ProductPackage}  = grpc.loadPackageDefinition(productProto);
const productServiceURL = "localhost:4001";
const productClient = new ProductPackage.ProductService(productServiceURL, grpc.credentials.createInsecure());

class ProductController {
    getListProduct (req, res, next) {
        try {
            productClient.listProduct(null, (err, data) => {
                if(err) return next(err);
                return res.status(200).json(data); 
            })
        } catch (error) {
            next(error)
        }
    }
    getProduct (req, res, next) {
        try {
            const {id} = req.params;
            productClient.getProduct({id}, (err, data) => {
                if(err) return next(err);
                return res.status(200).json(data); 
            })
        } catch (error) {
            next(error)
        }
    }
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
    updateProduct (req, res, next) {
        try {
            const {title, price, id} = req.body;
            productClient.updateProduct({title, price, id}, (err, data) => {
                if(err) return next(err);
                return res.status(201).json(data); 
            })
        } catch (error) {
            next(error)
        }
    }
    deleteProduct (req, res, next) {
        try {
            const {id} = req.params;
            productClient.deleteProduct({id}, (err, data) => {
                if(err) return next(err);
                return res.status(201).json(data); 
            })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = {
    ProductController : new ProductController()
}
