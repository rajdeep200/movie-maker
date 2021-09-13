const express = require("express");
const cors = require("cors");
const connectdb = require("./config/db");
const bodyParser = require("body-parser");
const movieRoutes = require("./router/movies");
require("dotenv").config();
connectdb();

const app = express()

//Routes
app.use("/movies", movieRoutes);

app.use(bodyParser.json({ limit:"30mb", extended:true }))
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true }))
app.use(cors());

app.listen(process.env.PORT, () => console.log(`server running on ${process.env.PORT}`))
