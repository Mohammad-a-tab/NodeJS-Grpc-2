const { AuthController } = require("../http/controllers/user/auth.controller");
const router = require("express").Router();

router.post("/add", AuthController.getOtp)

module.exports = {
    AuthRouter : router
}