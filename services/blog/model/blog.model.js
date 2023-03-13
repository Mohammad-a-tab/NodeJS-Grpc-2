const {default : mongoose} = require("mongoose")
const BlogModel = new mongoose.Schema({
    id: {type:  Number, unique: true},
    title: {type: String, required: true},
    description: {type: String}
})