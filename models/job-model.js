const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        default: "No description",
    },
});

const Job = mongoose.model("Job", jobsSchema);

module.exports = {
    Job,
};
