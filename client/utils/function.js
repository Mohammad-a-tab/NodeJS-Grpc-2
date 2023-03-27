const bcrypt = require('bcrypt')
const createError = require("http-errors");

function hashPassword(password) {
    const saltRounds = 10;
    const hash = bcrypt.hash(password, saltRounds, (err) => {
        if(err) return createError.BadRequest(err.message)
    })
    console.log(hash);
    return hash
}
const hash = hashPassword("mmd1234")
console.log(hash);