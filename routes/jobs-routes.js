const { saveAJob, getAllJobs } = require("../controllers/jobs-controller");

const router = require("express").Router();

router.get("/", getAllJobs);

router.post("/", saveAJob);

module.exports = router;
