const { BlogController } = require("../http/controllers/blog/blog.controller");
const { uploadFileBlog } = require("../../services/blog/utils/multer");
const { StringToArray } = require("../http/middlewares/StringToArray");
const router = require("express").Router();

router.post("/add", uploadFileBlog.single("image"), StringToArray("tags"), BlogController.createBlog)
router.get("/list", BlogController.getListBlog)
router.get("/:id", BlogController.getBlog)
router.put("/update", uploadFileBlog.single("image"), StringToArray("tags"), BlogController.updateBlog)
router.delete("/remove/:id", BlogController.deleteBlog)

module.exports = {
    BlogRouter : router
}