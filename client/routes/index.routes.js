const { ProductRouter } = require("./product.routes");
const { BlogRouter } = require("./blog.routes");
const { UserRouter } = require("./user.routes");
const router = require("express").Router();

router.use("/product", ProductRouter)
router.use("/user", UserRouter)
router.use("/blog", BlogRouter)

module.exports = {
    AllRoutes : router
}