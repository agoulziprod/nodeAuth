module.exports = {

    signUp: async (req, res, next) => {
        console.log(`content of req value body ${JSON.stringify(req.value.body)}`)
        console.log('tfaaa7 dial signUp')
    },
    signIn: async (req, res, next) => {
        console.log('tfaaa7 dial signIn')
    },
    secret: async (req, res, next) => {
        console.log('tfaaa7 dial secret')
    },
}