async function login(req, res) {
    return res.send("Successfully logged in")
}

async function register(req, res) {



    return res.send("Successfully registered in")
}

module.exports = {
    login, register
}