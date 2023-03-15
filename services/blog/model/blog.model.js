const {default: mongoose} = require("mongoose")
const BlogSchema = new mongoose.Schema({
    id: {type:  Number, unique: true},
    title: {type: String, required: true},
    text : {type : String , required : true},
    image : {type : String, required : true},
    tags : {type : [String] , default : []},
})
// BlogSchema.pre('save', function(next) {
//     if (this.isNew) {
//       const now = new Date();
//       const timestamp = Math.floor(now.getTime() / 1000);
//       const hexSeconds = timestamp.toString(16);
//       const objectId = mongoose.Types.ObjectId(`${hexSeconds}0000000000000000`);
//       this._id = objectId;
//     }
//     next();
// });
module.exports = {
    BlogModel : mongoose.model("blog", BlogSchema)
}
