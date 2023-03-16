const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path")
const blogProtoPath = path.join(__dirname, "..", "..", "..", "protos", "blog.proto");
const blogProto = protoLoader.loadSync(blogProtoPath);
const {BlogPackage}  = grpc.loadPackageDefinition(blogProto);
const BlogServiceURL = "localhost:4002";
const blogClient = new BlogPackage.BlogService(BlogServiceURL, grpc.credentials.createInsecure());

class BlogController {
    getListBlog (req, res, next) {
        try {
            blogClient.getListBlog(null, (err, data) => {
                if(err) return next(err);
                return res.status(200).json(data); 
            })
        } catch (error) {
            next(error)
        }
    }
    getBlog (req, res, next) {
        try {
            const {id} = req.params;
            blogClient.getBlog({id}, (err, data) => {
                if(err) return next(err);
                return res.status(200).json(data); 
            })
        } catch (error) {
            next(error)
        }
    }
    createBlog (req, res, next) {
        try {
            const {title, text, tags} = req.body;
            const pathImage =path.join(req.body.fileUploadPath, req.body.filename)
            const image = pathImage.replace(/\\/g, "/")
            if(image) {
                blogClient.createBlog({title, text, tags, image}, (err, data) => {
                    if(err) return next(err);
                    return res.status(201).json(data); 
                })
            }
        } catch (error) {
            next(error)
        }
    }
    updateBlog (req, res, next) {
        try {
            const {id, title, text, tags} = req.body;
            if(req.body.fileUploadPath && req.body.filename){
                const pathImage =path.join(req.body.fileUploadPath, req.body.filename)
                const image = pathImage.replace(/\\/g, "/")
                blogClient.updateBlog({id, title, text, tags, image}, (err, data) => {
                    if(err) return next(err);
                    return res.status(201).json(data); 
                })
            }
            else {
                blogClient.updateBlog({id, title, text, tags}, (err, data) => {
                    if(err) return next(err);
                    return res.status(201).json(data); 
                })
            }
           
        } catch (error) {
            next(error)
        }
    }
    deleteBlog (req, res, next) {
        try {
            const {id} = req.params;
            blogClient.deleteBlog({id}, (err, data) => {
                if(err) return next(err);
                return res.status(201).json(data); 
            })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = {
    BlogController : new BlogController()
}
