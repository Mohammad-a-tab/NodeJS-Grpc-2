const {default: mongoose} = require("mongoose")
const AutoIncrement = require("mongoose-sequence")(mongoose);
const BlogSchema = new mongoose.Schema({
    id: {type: Number, unique: true},
    title: {type: String, required: true},
    text : {type : String , required : true},
    image : {type : String, required : true},
    tags : {type : [String] , default : []}
})
BlogSchema.plugin(AutoIncrement,{
    inc_field: 'id', 
    id: "blog",
    start_seq: 1,
})

module.exports = {
    BlogModel : mongoose.model("blog", BlogSchema)
}
