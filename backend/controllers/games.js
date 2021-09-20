const asyncHandler = require("express-async-handler")
const PostGame = require("../models/postGame")

const getGames = asyncHandler(async (req,res) => {
    try {
        const games = await PostGame.find({});
        res.status(200).json(games);

    } catch (error) {
        res.status(400).json({ message : error.message})
    }
})

const createGame = asyncHandler(async (req, res) => {
    const game = req.body;
    console.log(game);
    const newGame = new PostGame(game);
    try {
        await newGame.save();
        res.status(201).json(newGame)
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
})

// const updateGame = asyncHandler(async (req,res) => {
//     const game = await PostGame.findById(req.user._id)
//     if(game){
//         if(req.body.link){
//             game.link = req.body.link;
//         }
//         const updatedGame = await game.save()
//     }else{
//         res.status(400)
//         throw new Error("Error")
//     }
// })

module.exports = { getGames, createGame};