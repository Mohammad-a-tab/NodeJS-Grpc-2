const { ProductGRPC } = require("../../services/product/functions/product.grpc");
const router = require("express").Router();

router.get("/list", ProductGRPC.listProduct);
router.get("/:id", ProductGRPC.getProduct);
router.post("/create", ProductGRPC.createProduct);
router.put("/update", ProductGRPC.updateProduct);
router.delete("/delete/:id", ProductGRPC.deleteProduct);

module.exports = {
    ProductRouter : router
}