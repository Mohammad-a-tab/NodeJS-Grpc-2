const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const authProtoPath = path.join(__dirname, "..", "..", "..", "..", "protos", "auth.proto");
const authProto = protoLoader.loadSync(authProtoPath);
const {AuthPackage}  = grpc.loadPackageDefinition(authProto);
const AuthServiceURL = "localhost:4003";
const authClient = new AuthPackage.AuthService(AuthServiceURL, grpc.credentials.createInsecure());

class AuthController {
    async getOtp (req, res, next) {
        try {
            const {phone, password} = req.body;
            authClient.getOtp({phone, password}, (err, data) => {
                if(err) return next(err)
                return res.status(200).json(data)
            })
        } catch (error) {
            next(error);
        }
    }
    checkOTP (req, res, next) {
        try {
            const {phone, code} = req.body;
            authClient.checkOTP({phone, code}, (err, data) => {
                if(err) return next(err)
                return res.status(200).json(data)
            })
        } catch (error) {
            next(error);
        }
    }
    refreshToken (req, res, next) {
        try {
            const {refreshToken} = req.body;
            authClient.refreshToken({refreshToken}, (err, data) => {
                if(err) return next(err)
                return res.status(200).json(data)
            })
        } catch (error) {
            next(error);
        }
    }
}
module.exports = {
    AuthController : new AuthController()
}
