const { saveAJob } = require("../controllers/jobs-controller");

const router = require("express").Router();

router.get("/", (req, res) => {
    return res.send("Find ALl Jobs here");
});

router.post("/", saveAJob);

module.exports = router;
