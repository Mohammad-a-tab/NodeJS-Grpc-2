const bcrypt = require('bcrypt')
async function hashPassword(password) {
    const saltRounds = 10;
    const hashPass = await bcrypt.hash(password, saltRounds);
    return hashPass
}
module.exports = {
    hashPassword
}
