const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const jwtSecretKey = "A_SecRet_Key_For_JWT"

async function encryptPassword(rawPassword) {
    let salt = await bcrypt.genSalt(10);

    return bcrypt.hash(rawPassword, salt)
}

function comparePasswords(rawPassword, encryptedPassword) {
    bcrypt.compare(rawPassword, encryptedPassword)
}

function tokenize(user) {
    return jwt.sign({ user: user.username }, jwtSecretKey, { expiresIn: 60 * 60 * 2 })
}

function verify(token) {
    return jwt.verify(token, jwtSecretKey)
}

module.exports = {
    verify,
    tokenize,
    encryptPassword,
    comparePasswords
}