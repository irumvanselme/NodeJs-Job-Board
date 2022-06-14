const mongoose = require("mongoose");

const Todo = mongoose.model("Job");

async function getAllJobs(req, res) {
    let jobs = await Todo.find();

    return res.send(jobs);
}

async function saveAJob(req, res) {
    let jobs = await new Todo(req.body).save();

    return res.send(jobs);
}

module.exports = {
    getAllJobs,
    saveAJob,
};
