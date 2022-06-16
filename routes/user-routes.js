const { all } = require("../controllers/users-controller");

const router = require("express").Router();

router.get("/", all);

module.exports = router;
