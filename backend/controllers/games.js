const PostGame = require("../models/postGame")

const getGames = async (req,res) => {
    try {
        const games = await PostGame.find({});
        res.status(200).json(games);

    } catch (error) {
        res.status(400).json({ message : error.message})
    }
}

const createGame = async (req, res) => {
    const game = req.body;
    console.log(game);
    const newGame = new PostGame(game);
    try {
        await newGame.save();
        res.status(201).json(newGame)
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}

module.exports = { getGames, createGame };