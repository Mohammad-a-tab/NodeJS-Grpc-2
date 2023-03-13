const { ProductRouter } = require("./product.routes");
const { BlogRouter } = require("./blog.routes");
const router = require("express").Router();

router.use("/product", ProductRouter)
router.use("/blog", BlogRouter)
module.exports = {
    AllRoutes : router
}