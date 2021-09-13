import axios from "axios";

const url = "http://localhost:5000/movies"

export const fetchMovies = () => axios.get(url);