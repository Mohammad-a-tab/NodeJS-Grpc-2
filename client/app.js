const express = require("express");
const { AllRoutes } = require("./routes/index.routes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(AllRoutes);
app.use((req, res, next) => {
    return res.status(404).json({
        statusCode : 404,
        message : "Not Found"
    })
});
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json({
        data : null,
        errors : [
            statusCode = err.status || 500,
            message = err.message
        ]
    })
});
app.listen(4000, () => {
    console.log("Client running over port 4000");
})