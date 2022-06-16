
// make this for only admin ...

const { User } = require("../models/user-model")

async function all(req, res) {
    let users = await User.find();

    return res.send(users)
}

module.exports = {
    all
}