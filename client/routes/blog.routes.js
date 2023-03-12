const router = require("express").Router();

router.get("/list");
router.post("/create");
router.get("/:id");
router.put("/update",);
router.delete("/remove/:id");

module.exports = {
    BlogRouter : router
}