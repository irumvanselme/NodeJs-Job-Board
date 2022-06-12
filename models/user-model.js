const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    fullNames: {
        type: String,
        required: true,
    },

    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE",
    },
});

const User = mongoose.model("User", usersSchema);

module.exports = {
    User,
};
