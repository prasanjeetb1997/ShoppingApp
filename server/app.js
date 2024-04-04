require("dotenv").config();
require("./config/mongodb");
const express = require('express');
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Event listener for uncaught Exception
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    console.error("Shutting down the server due to uncaught exception");
    // Gracefully shutdown the application
    process.exit(1);
});


app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/product", require("./routes/productRoute"));
app.use("/api/v1/user", require("./routes/userRoute"));


// Middleware for handling unknown routes
app.use((req, res) => {
    res.status(404).json({ message: 'Invalid URL! Please check the URL' });
});


// app error catching middleware 
app.use((err, req, res, next) => {

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
});



const port = process.env.PORT
app.listen(port, () => {
    console.log(`The app is listening on port ${port}`)
});