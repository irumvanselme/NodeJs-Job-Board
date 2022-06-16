const Validatorjs = require("validatorjs")

function validate(data, rules) {
    let valid = new Validatorjs(data, rules);

    if (valid.fails()) {
        return [false, valid.errors.all()];
    } else
        return [true, valid.input]

}

module.exports = {
    validate
}