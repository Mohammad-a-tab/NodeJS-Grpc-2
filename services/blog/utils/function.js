const path  = require("path");
const fs = require("fs");

function deleteFilePublic(fileAddress) {
    if (!Array.isArray(fileAddress) && fileAddress.length > 0) {
        const pathFile = path.join(__dirname, "..", "..", "..", "public", fileAddress)
        if (fs.existsSync(pathFile)) fs.unlinkSync(pathFile)
    }else if(Array.isArray(fileAddress) && fileAddress.length > 0){
       for (const image of fileAddress) {
        const pathFile = path.join(__dirname, "..", "..", "public", image)
        if (fs.existsSync(pathFile)) fs.unlinkSync(pathFile)
       }
    }else if(fileAddress == null || undefined || "" || [""]){
        return "Not found"
    }

}
module.exports = {
    deleteFilePublic
}