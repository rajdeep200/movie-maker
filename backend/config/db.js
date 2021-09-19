const mongoose = require("mongoose");
require("dotenv").config();

const connectdb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
    console.log(`Database connected at ${connection.connection.host}`)
  } catch (error) {
    console.log(error);
  }
};



module.exports = connectdb
