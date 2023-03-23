const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const authProtoPath = path.join(__dirname, "..", "..", "..", "..", "protos", "auth.proto");
const authProto = protoLoader.loadSync(authProtoPath);
const {AuthPackage}  = grpc.loadPackageDefinition(authProto);
const AuthServiceURL = "localhost:4003";
const authClient = new AuthPackage.AuthService(AuthServiceURL, grpc.credentials.createInsecure());

class AuthController {
    getOtp (req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
    checkOTP (req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
    refreshToken (req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
    saveUser (req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
    updateUser (req, res, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
}
module.exports = {
    AuthController : new AuthController()
}
