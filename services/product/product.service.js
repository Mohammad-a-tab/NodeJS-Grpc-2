require("./config/db.connection");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const protoPath = path.join(__dirname, "..", "..", "protos","product.proto");
const productProto = protoLoader.loadSync(protoPath);
const {ProductPackage} = grpc.loadPackageDefinition(productProto);
const ProductServiceURL = "localhost:4001";
const { listProduct, getProduct, createProduct, updateProduct, deleteProduct } = require('./functions/product.grpc');
function main() {
    const server = new grpc.Server();
    server.addService(ProductPackage.ProductService.service, {
        listProduct,
        getProduct,
        createProduct,
        updateProduct,
        deleteProduct
    });
    server.bindAsync(ProductServiceURL, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if(err) return console.log("Error :", err);
        console.log("GRPC Service Running On port " + port);
        server.start();
    })
}
main()