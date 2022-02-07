import Popup from "../components/Popup.js";

export default class PopupWithForm extends Popup {
    constructor(selector, submitFormCallback) {
        super(selector);
        this._submitFormCallback = submitFormCallback;
    }

    _getInputValues() {
        return Array.from(this._element.querySelectorAll('.popup__input'));
    }

    setEventListeners() {
        super.setEventListeners();
        this._element.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitFormCallback(this._getInputValues());
        });
    }
}