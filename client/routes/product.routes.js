const { ProductController } = require("../controllers/product.controller");
const router = require("express").Router();

router.get("/list", ProductController.getListProduct);
router.post("/create", ProductController.createProduct);
router.get("/:id", ProductController.getProduct);
router.put("/update", ProductController.updateProduct);
router.delete("/delete/:id", ProductController.deleteProduct);

module.exports = {
    ProductRouter : router
}