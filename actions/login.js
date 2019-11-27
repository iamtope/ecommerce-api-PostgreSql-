const db = require('../utils/database');

const findUserById = (id) =>{
    const query = `
        SELECT *
        FROM user
        WHERE id = $1
    `
    return db.oneOrNone(query, [id])
}

const verifyUser = (email) =>{
    const query = `
        SELECT *
        FROM user
        WHERE email = $1
    `
    return db.oneOrNone(query, [email])
}

module.exports = {findUserById, verifyUser}