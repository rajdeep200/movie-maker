const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    name: String,
    date: String,
    language: String,
    thumbnail: String,
    createdAt:{
        type: Date,
        default: new Date()
    }
})

const PostMovie = mongoose.model("PostMovie", movieSchema);

module.exports = PostMovie;