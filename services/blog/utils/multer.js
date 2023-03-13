const createHttpError = require("http-errors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

function createRouteForBlogs(req) {
    const date = new Date();
    const monthNumber = date.getMonth() + 1;
    const Year = date.getFullYear().toString();
    const Month = monthNumber.toString();
    const Day = date.getDate().toString();
    const directory = path.join(__dirname , "..", "..", ".." , "public" , "uploads" , "blogs" , Year , Month , Day);
    req.body.fileUploadPath = path.join("uploads" , "blogs" , Year , Month , Day)
    fs.mkdirSync(directory , {recursive : true});
    return directory
}
const storageForBlog = multer.diskStorage({
    destination : (req,file,cb) => {
        if(file?.originalname){
            const filePath = createRouteForBlogs(req);
            return cb(null , filePath)
        }
        cb(null, null)
    },
    filename : (req,file,cb) => {
        if(file.originalname){
            const ext = path.extname(file.originalname);
            const fileName = String(new Date().getTime() + ext);
            req.body.filename = fileName;
            return cb(null, fileName)
        }
        cb(null, null)
    }
});
function fileFilter(req, file, cb) {
    const ext = path.extname(file.originalname);
    const mimetypes = [".jpg", ".jpeg", ".png", ".webp", ".gif"];
    if (mimetypes.includes(ext)) {
      return cb(null, true);
    }
    return cb(createHttpError.BadRequest("فرمت ارسال شده تصویر صحیح نمیباشد"));
}
const pictureMaxSize = 4 * 1000 * 1000;     //4MB
const uploadFileBlog = multer({storage : storageForBlog , fileFilter , limits : {fileSize : pictureMaxSize}});
module.exports = {
    uploadFileBlog
}