const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "User",
    },

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
