module.exports = {
    formatResponse(message = "Success", body) {
        return {
            message,
            body,
        };
    },
};
