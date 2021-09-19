const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
    teamA: String,
    teamB: String,
    date: String,
    time: String,
    link: String
})

const PostGame = mongoose.model("PostGame", gameSchema);

module.exports = PostGame;