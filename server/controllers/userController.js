const userModel = require("../models/userModel");
const errorHandler = require("../utils/errorhandler");


const registerUser = async (req, res, next) => {
    try {
        let user = await userModel.findOne({ email: req.body.email });

        if (user) {
            return next(new errorHandler(200, "User Already Exists!"));
        }

        user = await userModel.create(req.body);

        return res.status(201).json({
            success: true,
            user
        });

    } catch (error) {
        next(error)
    }
}


const loginUser = async (req, res, next) => {
    try {
        const user = await userModel.findOne({ email: req.body.email }).select("+password");

        if (!user) {
            return next(new errorHandler(404, "This email doesn't exists!"));
        }

        const isPasswordMatched = await user.comparePassword(req.body.password);

        if (!isPasswordMatched) {
            return next(new errorHandler(401, "Incorrect Email or Password!"));
        }

        const token = user.generateJwtToken();

        return res.cookie('jwt', token, { httpOnly: true, expires: new Date(Date.now() + 86400000) })
            .status(200)
            .json({
                success: true,
                message: "Login Successful!"
            });

    } catch (error) {
        next(error)
    }
}


const logoutUser = async (req, res, next) => {
    try {
        return res.cookie('jwt', null, { httpOnly: true, expires: new Date(Date.now()) })
            .json({
                success: true,
                message: "Logout Successful!"
            });

    } catch (error) {
        next(error)
    }
}


module.exports = { registerUser, loginUser, logoutUser }