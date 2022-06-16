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

function getcookie(req) {

    if (!req.headers.cookie) return {}

    let cookies = {}
    var cookie_list = req.headers.cookie.split('; ');
    // user=someone; session=QyhYzXhkTZawIb5qSl3KKyPVN (this is my cookie i get)

    cookie_list.forEach(cookie => {
        if (cookie) {
            let [key, value] = cookie.split('=')
            cookies[key] = value
        }
    });

    return cookies
}


module.exports = {
    verify,
    tokenize,
    encryptPassword,
    comparePasswords,
    getcookie
}