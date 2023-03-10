const { ProductRouter } = require("./product.routes");
const router = require("express").Router();

router.use("/product", ProductRouter)
module.exports = {
    AllRoutes : router
}