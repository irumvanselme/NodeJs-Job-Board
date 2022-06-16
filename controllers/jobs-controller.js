const mongoose = require("mongoose");
const { validate } = require("../utils/validate");

const Todo = mongoose.model("Job");

// this is for. everyone [Public]
async function all(req, res) {
    let jobs = await Todo.find();
    return res.send(jobs);
}

// this is for only registered users
async function create(req, res) {
    let [passes, data] = validate(req.body, {
        title: "required|string|min:3",
        description: "required|string|min:3",
    })

    if (!passes) return res.status(400).send(data)


    let jobs = await new Todo(req.body).save();
    return res.send(jobs);
}

module.exports = {
    all,
    create,
};
