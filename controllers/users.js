const User = require('../models/user')
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
        
        const newUser = new User({ email, password });
        await newUser.save();

        res.json({user: 'created'})
    },
    signIn: async (req, res, next) => {
        console.log('tfaaa7 dial signIn')
    },
    secret: async (req, res, next) => {
        console.log('tfaaa7 dial secret')
    },
}