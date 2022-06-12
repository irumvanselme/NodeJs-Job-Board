const mongoose = require("mongoose");

let User = mongoose.model("User");

const router = require("express").Router();

router.get("/", async (req, res) => {
    console.log("trying to accesss all userrs");

    let users = await User.find();

    return res.send(users);
});

module.exports = router;
