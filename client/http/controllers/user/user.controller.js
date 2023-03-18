const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const userProtoPath = path.join(__dirname, "..", "..", "..", "..", "protos", "user.proto");
const userProto = protoLoader.loadSync(userProtoPath);
const {UserPackage}  = grpc.loadPackageDefinition(userProto);
const userServiceURL = "localhost:4003";
const userClient = new UserPackage.UserService(userServiceURL, grpc.credentials.createInsecure());
const path = require("path");

class UserController {
    
}
module.exports = {
    UserController : new UserController()
}
