const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// create a Schema
const userSchema = new Schema({
    email: String,
    password: String
})
// create a model 

const User= mongoose.model('user',userSchema)

// export the model
module.exports = User;