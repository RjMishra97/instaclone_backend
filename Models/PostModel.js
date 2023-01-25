const mongoose = require('mongoose');

const Schema = mongoose.Schema

const PostSchema = new Schema({
    name:{type : String, required : true},
    location:{type : String, required : true},
    likes:{type : Number, required : true},
    description:{type : String, required : true},
    PostImage: {type : String, required : true},
    date: {type : String, required : true}
},{collection : "users"})

const users = mongoose.model("users" , PostSchema)

module.exports = users;

