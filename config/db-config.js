const mongoose = require("mongoose");

mongoose
    .connect("mongodb://data-store:27017/nat-examination")
    .then((res) => {
        console.log("Connected to the database");
    })
    .catch((e) => {
        console.log("Failed to connect to the database");
        // process.exit(0);
    });

require("../models/user-model");
require("../models/job-model");
