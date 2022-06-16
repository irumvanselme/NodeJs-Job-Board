require("./config/db-config");

const express = require("express");

const swaggerUi = require("swagger-ui-express"),
    swaggerDocument = require("./swagger.json");

const { formatResponse } = require("./utils/formatter");

const usersRoutes = require("./routes/user-routes");
const jobsRoutes = require("./routes/jobs-routes");
const authRoutes = require("./routes/auth-routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.send(formatResponse("RUNNING"));
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/users", usersRoutes);
app.use("/api/jobs", jobsRoutes);
app.use("/api/auth", authRoutes);

module.exports = {
    app,
};
