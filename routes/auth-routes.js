const { register, login, get_profile } = require("../controllers/auth-controller");

const router = require("express").Router();

router.post("/register", register);

router.post("/login", login);

router.get("/profile", get_profile);

module.exports = router;
