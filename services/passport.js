const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const {findUserById, verifyUser} = require('../actions/login')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')
require('dotenv').config()

const LocalLogin = new LocalStrategy((email, password) =>{
    return verifyUser(email)
    .then((validUser)=>{
        bcrypt.compare(password, validUser.password)
    .then((validPassword)=>{
        if(validPassword){
            return document(null, validUser)
        }
            return(null,false)
        
    })
    .catch((err)=>{
        res.status(409)
        .json({
            status: failure,
            message: 'an error occured during  password verification'
        })
    })
    })
})

//set up for jwt strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: process.env.SECRET
}

// create jwt strategy
const jwtLogin = new jwtStrategy(jwtOptions,(payload, done)=>{
    return findUserById(payload.sub)
    .then((foundUser)=>{
        if (foundUser){
            return done(null,foundUser)
        }return done(null, false)
    })
    .catch (err => done(err, false))
})

// tell passport to use this strategy
passport.use(jwtLogin)
passport.use(LocalLogin)