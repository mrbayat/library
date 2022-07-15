const ValidatorAbstract = require("./validatorAbstract");

module.exports = class UsernameValidator extends ValidatorAbstract {
    /**
     * @param {string} username
     */
    constructor(username) {
        super();
        this.username = username;
    }

    /**
     * @inheritDoc
     */
    isValid() {
        if (this.username.length < 3) {
            super.error = "username not validate";
        }
        if (this.username.length > 100) {
            super.error = "username not validate";
        }

        return !this._error;
    }
}
