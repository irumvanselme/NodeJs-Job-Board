const { all, create } = require("../controllers/jobs-controller");

const router = require("express").Router();

router.get("/", all);

router.post("/", create);

module.exports = router;
