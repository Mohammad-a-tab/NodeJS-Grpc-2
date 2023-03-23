const { ProductController } = require("../http/controllers/product/product.controller");
const router = require("express").Router();

router.get("/list", ProductController.getListProduct)
router.post("/add", ProductController.createProduct)
router.get("/:id", ProductController.getProduct)
router.put("/update", ProductController.updateProduct)
router.delete("/remove/:id", ProductController.deleteProduct)

module.exports = {
    ProductRouter : router
}