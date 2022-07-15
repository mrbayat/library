const ValueObjectInterface = require("./valueObjectInterface");
const TitleValidator = require("../validator/titleValidator");

module.exports = class Title extends ValueObjectInterface {
    /**
     * @param {string} title
     */
    constructor(title) {
        super();

        const titleValidator = new TitleValidator(title);
        if (true !== titleValidator.isValid()) {
            throw new Error(titleValidator.error);
        }
        
        this._value = title;
    }

    /**
     * @return {string}
     */
    get value() {
        return this._value;
    }
}