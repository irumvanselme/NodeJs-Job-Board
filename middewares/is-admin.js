function is_admin(req, res, next) {

    if (req.user.role === "ADMIN") {
        return next();
    }
    return res.status(401).send({ message: "Unauthorized" });
}

module.exports = {
    is_admin
}