const ValueObjectInterface = require("./valueObjectInterface");
const PasswordValidator = require("../validator/passwordValidator");

module.exports = class Password extends ValueObjectInterface {
    /**
     * @param {string} password
     */
    constructor(password) {
        super();

        const passwordValidator = new PasswordValidator(password);
        if (true !== passwordValidator.isValid()) {
            throw new Error(passwordValidator.error);
        }
        
        this._value = password;
    }

    /**
     * @return {string}
     */
    get value() {
        return this._value;
    }
}