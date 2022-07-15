const ValueObjectInterface = require("./valueObjectInterface");
const UsernameValidator = require("../validator/usernameValidator");

module.exports = class Username extends ValueObjectInterface {
    /**
     * @param {string} username
     */
    constructor(username) {
        super();

        const usernameValidator = new UsernameValidator(username);
        if (true !== usernameValidator.isValid()) {
            throw new Error(usernameValidator.error);
        }
        
        this._value = username;
    }

    /**
     * @return {string}
     */
    get value() {
        return this._value;
    }
}