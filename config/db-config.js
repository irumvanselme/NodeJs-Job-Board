const mongoose = require("mongoose");

mongoose.connect("mongodb://data-store:27017/nat-examination").then((res) => {
    console.log("Connected to the database");
});

require("../models/user-model");
