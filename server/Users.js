const mongoose = require('mongoose')

 

const UsersSchema = new mongoose.Schema({
    name:String,
    link:String


})

mongoose.model("user",UsersSchema)