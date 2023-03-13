const multer = require("multer");
const path = require("path");
const fs = require("fs");

function createRouteForBlog(req) {
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