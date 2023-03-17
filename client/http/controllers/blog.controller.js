const { deleteFilePublic } = require("../../../services/blog/utils/function");
const { BlogModel } = require("../../../services/blog/model/blog.model");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const blogProtoPath = path.join(__dirname, "..", "..", "..", "protos", "blog.proto");
const blogProto = protoLoader.loadSync(blogProtoPath);
const {BlogPackage}  = grpc.loadPackageDefinition(blogProto);
const BlogServiceURL = "localhost:4002";
const blogClient = new BlogPackage.BlogService(BlogServiceURL, grpc.credentials.createInsecure());
const path = require("path");

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
            req.body.image = image;
            if(image) {
                blogClient.createBlog({title, text, tags, image}, (err, data) => {
                    if(err) return next(err);
                    return res.status(201).json(data); 
                })
            }
        } catch (error) {
            deleteFilePublic(req.body?.image)
            next(error)
        }
    }
    async updateBlog (req, res, next) {
        try {
            const {id, title, text, tags} = req.body;
            if(req.body.fileUploadPath && req.body.filename){
                const PathPreviousImage = await BlogModel.findOne({id})
                deleteFilePublic(PathPreviousImage?.image)
                const pathImage =path.join(req.body.fileUploadPath, req.body.filename)
                const image = pathImage.replace(/\\/g, "/")
                req.body.image = image;
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
            deleteFilePublic(req.body?.image)
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
