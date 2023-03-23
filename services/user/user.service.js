require("./config/db.connection");
require("./utils/Init-Redis");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const protoPath = path.join(__dirname, "..", "..", "protos","user.proto");
const userProto = protoLoader.loadSync(protoPath);
const {UserPackage} = grpc.loadPackageDefinition(userProto);
const UserServiceURL = "localhost:4004";
const { getListOfUser, registerUser, updateUser, deleteUser, getUser } = require('./functions/user.grpc');

function main() {
    const server = new grpc.Server();
    server.addService(UserPackage.UserService.service, {
        getListOfUser,
        registerUser,
        getUser,
        updateUser,
        deleteUser
    });
    server.bindAsync(UserServiceURL, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if(err) return console.log("Error :", err);
        console.log("GRPC Service Running On port " + port);
        server.start();
    })
}
main()