const ValueObjectInterface = require("./valueObjectInterface");
const DescriptionValidator = require("../validator/descriptionValidator");

module.exports = class Description extends ValueObjectInterface {
    /**
     * @param {string} description
     */
    constructor(description) {
        super();

        const descriptionValidator = new DescriptionValidator(description);
        if (true !== descriptionValidator.isValid()) {
            throw new Error(descriptionValidator.error);
        }
        
        this._value = description;
    }

    /**
     * @return {string}
     */
    get value() {
        return this._value;
    }
}