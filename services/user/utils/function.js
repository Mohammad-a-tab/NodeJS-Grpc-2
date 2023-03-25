const { ACCESS_TOKEN_SECRET_KEY, REFRESH_TOKEN_SECRET_KEY } = require("./constants");
const { UserModel } = require("../model/user.model");
const redisClient = require("./Init-Redis");
const createError = require("http-errors");
const JWT = require("jsonwebtoken");

function RandomNumberGenerator(){
    return Math.floor((Math.random() * 90000) + 10000)
}
function SignAccessToken(userID){
    return new Promise(async (resolve , reject) => {
        const user = await UserModel.findById(userID)
        const payload = {
            phone : user.phone
        }
        const options = {
            expiresIn : "20d"
        }
        JWT.sign(payload , ACCESS_TOKEN_SECRET_KEY , options , (err , token) => {
            if(err) reject(createError.InternalServerError("Internal server error"));
            resolve(token)
        })
    });
  
}
function SignRefreshToken(userID){
    return new Promise(async (resolve , reject) => {
        const user = await UserModel.findById(userID)
        const payload = {
            phone : user.phone
        }
        const options = {
            expiresIn : "365d"
        }
        JWT.sign(payload , REFRESH_TOKEN_SECRET_KEY , options , async (err , token) => {
            if(err) reject(createError.InternalServerError("Internal Server Error"));
            await redisClient.SETEX(String(userID), (365 * 24 * 60 * 60) ,token);
            resolve(token)
        })
    });
  
}
function verifyRefreshToken(token){
    return new Promise((resolve , reject) => {
        JWT.verify(token , REFRESH_TOKEN_SECRET_KEY , async (err , payload) => {
            if(err) reject(createError.Unauthorized("Please log in to your account"));
            const {phone} = payload || {}
            const user = await UserModel.findOne({phone} , {password : 0 , otp : 0});
            if(!user) reject(createError.Unauthorized("User account not found"));
            const refreshToken = await redisClient.get(String(user?._id || "key-default"));
            if(!refreshToken) reject(createError.Unauthorized("Login to user account failed"))
            if(token === refreshToken) return resolve(phone);
            reject(createError.Unauthorized("Login to user account failed"));
        });
        
    })
}
module.exports = {
    RandomNumberGenerator,
    SignAccessToken,
    SignRefreshToken,
    verifyRefreshToken
}