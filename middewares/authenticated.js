const { User } = require("../models/user-model");
const { getcookie, verify } = require("../utils/authentication");

async function authenticated(req, res, next) {
    let authorization_token = getcookie(req).authorization_token

    if (!authorization_token) {
        return res.status(401).send({ message: "Unauthorized" })
    }


    try {
        let { user: username } = verify(authorization_token)

        let user = await User.findOne({ username })

        req.user = user

        next();
    } catch (error) {
        return res.status(401).send({ message: "Unauthorized" })
    }
}

module.exports = {
    authenticated
}