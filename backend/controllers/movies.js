const PostMovie = require("../models/postMovie")

const getMovies = async (req,res) => {
    try {
        const movies = await PostMovie.find({});
        res.status(200).json(movies);

    } catch (error) {
        res.status(400).json({ message : error.message})
    }
}

const createMovie = async (req, res) => {
    const movie = req.body;
    const newMovie = new PostMovie(movie);
    try {
        await newMovie.save();
        res.status(201).json(newMovie)
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}

module.exports = { getMovies, createMovie };