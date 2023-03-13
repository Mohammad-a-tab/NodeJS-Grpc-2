const { default: mongoose } = require("mongoose");

const ProductSchema = new mongoose.Schema({
    id: {type: Number, unique: true},
    title: {type: String},
    price: {type: String}
})
ProductSchema.pre("save", function(next) {
    const self = this;
    self.constructor.count(async function(err, data) {
        if(err) return next(err);
        self.set({id: (data + 1)})
        next();
    })
})
module.exports = {
    ProductModel : mongoose.model("product", ProductSchema)
}