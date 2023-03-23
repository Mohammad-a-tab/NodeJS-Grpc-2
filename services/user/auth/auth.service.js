require("./config/db.connection");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const protoPath = path.join(__dirname, "..", "..", "..", "protos","auth.proto");
const authProto = protoLoader.loadSync(protoPath);
const {AuthPackage} = grpc.loadPackageDefinition(authProto);
const AuthServiceURL = "localhost:4003";
const { getOtp, checkOTP, refreshToken } = require('./functions/auth.grpc');

function main() {
    const server = new grpc.Server();
    server.addService(AuthPackage.AuthService.service, {
        getOtp,
        checkOTP,
        refreshToken
    });
    server.bindAsync(AuthServiceURL, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if(err) return console.log("Error :", err);
        console.log("GRPC Service Running On port " + port);
        server.start();
    })
}
main()