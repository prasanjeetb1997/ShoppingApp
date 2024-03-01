const mongoose = require("mongoose")
const { Schema } = mongoose;

const blogSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  roll: String,
  age : Number
},{timestamps:true});


const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;