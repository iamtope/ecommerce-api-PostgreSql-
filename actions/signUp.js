const db = require('../utils/database');

const createUser = function(email, password){
    const query = `
    INSERT INTO user 
    (email, password)
    VALUES ($1, $2)
    RETURNING *
    `
    return db.one(query, [email, password])
}

module.exports = createUser 