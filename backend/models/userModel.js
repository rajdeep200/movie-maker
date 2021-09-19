const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return bcrypt.compare(this.password, enteredPassword)
}

userSchema.pre("save", async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
} )

const User = mongoose.model("User", userSchema);
module.exports = User;
