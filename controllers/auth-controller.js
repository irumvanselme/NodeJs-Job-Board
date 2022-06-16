const { User } = require("../models/user-model")
const { encryptPassword, tokenize } = require("../utils/authentication")
const { validate } = require("../utils/validate")

async function login(req, res) {
    let [passes, data] = validate(req.body, {
        login: "required|string|min:3",
        password: "required|string|min:3",
    })


    if (!passes) return res.status(400).send(data)

    let user = await User.findOne({
        $or: [
            { username: data.login },
            { email: data.login }
        ]
    })

    if (!user) return res.status(400).send({ message: "User already exists" })

    let token = tokenize(user)

    return res.send({
        user,
        token
    })
}

async function register(req, res) {
    let [passes, data] = validate(req.body, {
        full_names: "required|string|min:3",
        email: "required|email",
        username: "required|string|min:3",
        password: "required|string|min:3",
    })

    if (!passes) return res.status(400).send(data)

    data.password = await encryptPassword(data.password)


    var oldUser = await User.findOne({
        $or: [
            { username: data.username },
            { email: data.email }
        ]
    })
    if (oldUser) return res.status(400).send({ message: "User already exists" })

    let newUser = new User(data)
    newUser = await newUser.save()

    return res.status(201).send(newUser)
}

module.exports = {
    login, register
}