// Stripe api keys
// Publishable key
// pk_test_VxiZxQdlSdyAxTM2az2T8JVZ00govR9nyL
// Secret key
// sk_test_tqq1N70BoO1kJsBLafULR6Ik009S63JnkD

const express = require('express');
const productRoutes = require('./routes/products');
const authRouter = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');
const passportService = require('./services/passport');
const authentication = require('./actions/signUp');
const signUp = require('./controllers/authentication').signup;

const requireAuth = passport.authenticate('jwt', {
    session: false
})

require('dotenv').config()
const quantityMiddleware = require('./middleware/product/checkQuantity')

const app = express()
const stripe = require('stripe')('sk_test_tqq1N70BoO1kJsBLafULR6Ik009S63JnkD');
const port = process.env.PORT 

app.set('view engine', 'ejs');
// app.set('view options', {defaultLayout: 'layout'});

// import the queries.js
const db = require('./utils/database');


// parse various different custom JSON types as JSON
app.use(bodyParser.json())
// parse application/x-www-form-urlencoded
app.use(
    bodyParser.urlencoded({ 
        extended: true,
     })
     )

// tell a route to look for a get request on the root and return json
app.get('/',  ( req, res)=>{
    res.render('products', {

    })
  })


authRouter.post('/signup', signUp);
app.use( '/api/items', productRoutes);
app.use('/api/auth', signUp);


// set the application to listen on the PORT
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`)
})
