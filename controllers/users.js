const JWT= require('jsonwebtoken')
const User = require('../models/user')
const {JWT_SECRET}= require('../configuration')
signToken = user => {
     
        // generate a token
      return  JWT.sign({
            iss: 'agoulzi.com',
            sub: user.id,
            iat: new Date().getTime(), // current time
            exp: new Date().setDate(new Date().getDate()+1) // ghed lih bb
        }, JWT_SECRET);
    
}
module.exports = {

    signUp: async (req, res, next) => {
        console.log(`content of req value body ${JSON.stringify(req.value.body)}`)
        console.log('tfaaa7 dial signUp')
        const { email, password } = req.value.body;
        // check if ther s a user with the same email
        const foundUser = await User.findOne({ email })
        if (foundUser) {
         return   res.status(403).json({error: 'email already exists'})
        }
    // create a new user
        const newUser = new User({ email, password });
        await newUser.save();
       
        // generateToken 
        const token=signToken(newUser)
        // respond with token
        res.status(200).json({token})
    },
    signIn: async (req, res, next) => {
        console.log('tfaaa7 dial signIn')
    },
    secret: async (req, res, next) => {
        console.log('tfaaa7 dial secret')
    },
}