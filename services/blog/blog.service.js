require("./config/db.connection");
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");
const protoPath = path.join(__dirname, "..", "..", "protos","blog.proto");
const blogProto = protoLoader.loadSync(protoPath);
const {BlogPackage} = grpc.loadPackageDefinition(blogProto);
const BlogServiceURL = "localhost:4002";
const { getListBlog, getBlog, createBlog, updateBlog, deleteBlog } = require('./functions/blog.grpc');
function main() {
    const server = new grpc.Server();
    server.addService(BlogPackage.BlogService.service, {
        getListBlog,
        getBlog,
        createBlog,
        updateBlog,
        deleteBlog
    });
    server.bindAsync(BlogServiceURL, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if(err) return console.log("Error :", err);
        console.log("GRPC Service Running On port " + port);
        server.start();
    })
}
main()