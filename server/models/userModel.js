const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secretKey = process.env.JWT_SECRET;
const { Schema } = mongoose;


const userSchema = new Schema({

    name: {
        type: String,
        required: [true, "Please Enter Your Name!"],
        minLength: [3, "Name Should Have More Than two Characters!"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please Enter Your Email!"],
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password!"],
        minLength: [6, "Password Should Be Greater Than five Characters!"],
        select: false
    },
    role: {
        type: String,
        default: "user"
    }

}, { timestamps: true });



// Method to generate JWT token for a user
userSchema.methods.generateJwtToken = function () {
    const token = jwt.sign({ id: this._id }, secretKey, { expiresIn: "1d" })
    return token;
};


userSchema.methods.comparePassword = async function (receivedPassword) {
    return await bcrypt.compare(receivedPassword, this.password);
};



// Middleware to hash password before saving
userSchema.pre('save', async function (next) {
    try {
        // Hash the password only if it's modified or new
        if (!this.isModified('password')) {
            return next();
        }

        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password with the generated salt
        const hashedPassword = await bcrypt.hash(this.password, salt);
        // Replace the plain password with the hashed one
        this.password = hashedPassword;

        next();

    } catch (error) {
        next(error);
    }
});


const User = mongoose.model('User', userSchema);

module.exports = User;