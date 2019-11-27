const jwt = require('jwt-simple')
const {createUser} = require('../actions/signUp')
const bcrypt = require('bcrypt')
require('dotenv').config()

const tokenForUser = (user) => {
  return jwt.encode({sub: user.id}), process.env.SECRET
}

const signin = (req, res,) => {
    res.send({token: tokenForUser(req.user)})
}

const signup = (req, res, next) => {
    const {email, password} = req.body
    const saltrounds = 12;
    if(!email || !password){
        res.status(400)
        .json({
            status: 'failure',
            message: 'Please provide email and password to login'
        })
    }
    // see if a user with the same email exists
    bcrypt.hash(password, saltrounds)
    .then((hash) =>{
        return newUser= db.query(`INSERT into USER (email,password)
                                  VALUES($1, $2)`,  [email, password, hash])
        .then((newUser)=>{
            res.json({token: tokenForUser(newUser)})
        })
        .catch((err)=>{
            console.log('err' + 'Error saving user to database')
        })
    }) 
}

module.exports = {signin, signup}