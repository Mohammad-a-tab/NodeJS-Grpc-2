const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path")
const productProtoPath = path.join(__dirname, "..", "..", "protos", "product.proto");
const productProto = protoLoader.loadSync(productProtoPath);
const {ProductPackage}  = grpc.loadPackageDefinition(productProto);
const productServiceURL = "localhost:4001";
const productClient = new ProductPackage.ProductService(productServiceURL, grpc.credentials.createInsecure());

async function listProduct (req, res, next) {}
async function getProduct (req, res, next) {}
async function createProduct (req, res, next) {}
async function updateProduct (req, res, next) {}
async function deleteProduct (req, res, next) {}
