const bcrypt = require('bcrypt')
async function hashPassword(password) {
    const saltRounds = 10;
    const hashPass = await bcrypt.hash(password, saltRounds);
    return hashPass
}
async function ValidatingPassword(password, hashPassword) {
    return await bcrypt.compare(password, hashPassword)
}
module.exports = {
    hashPassword,
    ValidatingPassword
}
