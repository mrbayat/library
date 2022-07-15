const ValidatorAbstract = require("./validatorAbstract");

module.exports = class PasswordValidator extends ValidatorAbstract {
    /**
     * @param {string} password
     */
    constructor(password) {
        super();
        this.password = password;
    }

    /**
     * @inheritDoc
     */
    isValid() {
        if (this.password.length < 3) {
            super.error = "password not validate";
        }

        return !this._error;
    }
}
