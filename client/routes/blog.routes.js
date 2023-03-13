const { BlogController } = require("../http/controllers/blog.controller");
const router = require("express").Router();

router.get("/list", BlogController.getListBlog);
router.post("/create", BlogController.createBlog);
router.get("/:id", BlogController.getBlog);
router.put("/update", BlogController.updateBlog);
router.delete("/remove/:id", BlogController.deleteBlog);

module.exports = {
    BlogRouter : router
}