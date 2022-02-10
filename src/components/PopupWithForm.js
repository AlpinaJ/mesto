import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
    constructor(selector, submitFormCallback) {
        super(selector);
        this._submitFormCallback = submitFormCallback;
    }

    _getInputValues() {
        this._inputList = this._element.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });

        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._element.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitFormCallback(this._getInputValues());
        });
    }
}