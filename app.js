const express= require('express')
const morgan= require('morgan')
const mongoose= require('mongoose')
const bodyParser= require('body-parser')


const helmet = require('helmet')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/apiAuthentification')
const app = express();
app.use(helmet())
app.use(helmet.hidePoweredBy ({setTo: 'PHP 4.2.0'}))
// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())


// Routes
app.use('/users',require('./routes/users'));

// Start the server 
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
    console.log('App listening on PORT 1234!');
});