function saveAJob(req, res) {
    console.log(req.body);

    return res.send({
        body: req.body,
        message: "Something not working",
    });
}

module.exports = {
    saveAJob,
};
