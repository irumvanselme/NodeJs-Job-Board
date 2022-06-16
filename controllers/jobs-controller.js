const mongoose = require("mongoose");

const Todo = mongoose.model("Job");

// this is for. everyone [Public]
async function all(req, res) {
    let jobs = await Todo.find();
    return res.send(jobs);
}

// this is for only registered users
async function create(req, res) {
    let jobs = await new Todo(req.body).save();
    return res.send(jobs);
}

module.exports = {
    all,
    create,
};
