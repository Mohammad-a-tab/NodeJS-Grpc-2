const { UserController } = require("../http/controllers/user/user.controller");
const router = require("express").Router();

router.get("/list", UserController.getListOfUser)
router.post("/add", UserController.registerUser)
router.get("/:id", UserController.getUser)
router.put("/update/:id", UserController.updateUser)
router.delete("/remove/:id", UserController.deleteUser)

module.exports = {
    UserRouter : router
}