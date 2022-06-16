const { all } = require("../controllers/users-controller");
const { authenticated } = require("../middewares/authenticated");
const { is_admin } = require("../middewares/is-admin");

const router = require("express").Router();

router.get("/", [authenticated, is_admin], all);

module.exports = router;
