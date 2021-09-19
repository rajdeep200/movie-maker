const User = require("../models/userModel");
const generateToken = require("../utils/utils")

const createUser = async (req, res) => {
    const {userId, password} = req.body;
    const user = await User.create({ userId, password })
    if(user){
        res.json({
            _id: user._id,
            userId:user.userId,
            password: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Error occurred")
    }
}

const loginUser = async (req, res) => {
    const {userId, password} = req.body;
    const user = await User.findOne({userId});

    if(user && (await user.matchPasswords(password)) ){
        res.json({
            userId:userId,
            token: generateToken(user._id)
        })
    }else{
        res.json(400).json({message:"Invalid user and password"})
    }

}


module.exports = {createUser, loginUser};