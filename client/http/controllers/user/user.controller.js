const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const { UserSchema } = require("../../validators/user/user.validator");
const userProtoPath = path.join(__dirname, "..", "..", "..", "..", "protos", "user.proto");
const userProto = protoLoader.loadSync(userProtoPath);
const {UserPackage}  = grpc.loadPackageDefinition(userProto);
const userServiceURL = "localhost:4004";
const userClient = new UserPackage.UserService(userServiceURL, grpc.credentials.createInsecure());

class UserController {
    registerUser (req, res, next) {
        try {
            const {firstName, lastName, email, password, phone} = req.body;
            userClient.registerUser({firstName, lastName, email, password, phone}, (err, data) => {
                if(err) return next(err)
                return res.status(201).json(data)
            })
            
        } catch (error) {
            next(error);
        }
    }
    getListOfUser (req, res, next) {
        try {
            userClient.getListOfUser(null, (err, data) => {
                if(err) return next(err)
                return res.status(200).json(data)
            })
        } catch (error) {
            next(error);
        }
    }
    getUser (req, res, next) {
        try {
            const {id} = req.params;
            userClient.getUser({id}, (err, data) => {
                if(err) return next(err)
                return res.status(200).json(data)
            })
        } catch (error) {
            next(error);
        }
    }
    async updateUser (req, res, next) {
        try {
            const {id} = req.params;
            const data = await UserSchema.validateAsync(req.body);
            userClient.updateUser({data, id}, (err, data) => {
                if(err) return next(err)
                return res.status(200).json(data)
            })
        } catch (error) {
            next(error);
        }
    }
    deleteUser (req, res, next) {
        try {
            const {id} = req.params;
            userClient.deleteUser({id}, (err, data) => {
                if(err) return next(err)
                return res.status(200).json(data)
            })
        } catch (error) {
            next(error);
        }
    }
}
module.exports = {
    UserController : new UserController()
}
