const {default : mongoose} = require("mongoose")
const BlogModel = new mongoose.Schema({
    id: {type:  Number, unique: true},
    title: {type: String, required: true},
    text : {type : String , required : true},
    image : {type : String, required : true},
    tags : {type : [String] , default : []},
})