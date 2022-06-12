const router = require("express").Router();

router.get("/", (req, res) => {
    return res.send("Find ALl Jobs here");
});

module.exports = router;
