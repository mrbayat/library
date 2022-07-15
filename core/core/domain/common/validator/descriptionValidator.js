const ValidatorAbstract = require("./validatorAbstract");

module.exports = class DescriptionValidator extends ValidatorAbstract {
    /**
     * @param {string} description
     */
    constructor(description) {
        super();
        this.description = description;
    }

    /**
     * @inheritDoc
     */
    isValid() {
        if (this.description.length < 1) {
            super.error = "description not validate";
        }
        if (this.description.length > 250) {
            super.error = "description not validate";
        }

        return !this._error;
    }
}
