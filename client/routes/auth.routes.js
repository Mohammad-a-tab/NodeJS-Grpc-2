const { AuthController } = require("../http/controllers/user/auth.controller");
const router = require("express").Router();

router.post("/get-otp", AuthController.getOtp)
router.post("/check-otp", AuthController.checkOTP)
router.post("/refreshToken", AuthController.refreshToken)

module.exports = {
    AuthRouter : router
}