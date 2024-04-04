const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/errorhandler");
const userModel = require("../models/userModel");
const secretKey = process.env.JWT_SECRET;



const isAuthenticatedUser = async (req, res, next) => {

    const token = req.cookies.jwt;

    if (!token) {
        return next(new errorHandler(401, "Please login first!"))
    }

    const decoded = jwt.verify(token, secretKey);

    // setting user in req object
    req.user = await userModel.findById(decoded.id);

    next()
}


const authorizeRole = (role) => {

    return (req, res, next) => {

        if (role !== req.user.role) {
            return next(new errorHandler(403, "You are not allowed to access this resource"));
        }

        next()
    }
}

module.exports = { isAuthenticatedUser, authorizeRole }