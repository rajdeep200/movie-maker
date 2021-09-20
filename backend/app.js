const express = require("express");
const cors = require("cors");
const connectdb = require("./config/db");
const bodyParser = require("body-parser");
const movieRoutes = require("./router/games");
const userRoutes = require("./router/userRouter")
require("dotenv").config();
connectdb();

const app = express()
app.use(express.json())

// app.use(bodyParser.json({ limit:"30mb", extended:true }))
// app.use(bodyParser.urlencoded({ limit:"30mb", extended:true }))
app.use(cors());

//Routes
app.use("/games", movieRoutes);
app.use("/user", userRoutes);

app.listen(process.env.PORT, () => console.log(`server running on ${process.env.PORT}`))
