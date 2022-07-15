const ValidatorAbstract = require("./validatorAbstract");

module.exports = class TitleValidator extends ValidatorAbstract {
    /**
     * @param {string} title
     */
    constructor(title) {
        super();
        this.title = title;
    }

    /**
     * @inheritDoc
     */
    isValid() {
        if (this.title.length < 1) {
            super.error = "title not validate";
        }
        if (this.title.length > 100) {
            super.error = "title not validate";
        }

        return !this._error;
    }
}
