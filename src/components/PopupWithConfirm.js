import Popup from '../components/Popup.js';

export default class PopupWithConfirm extends Popup {
    constructor(selector) {
        super(selector);
        this._button = this._element.querySelector('.popup__button');
    }

    setSubmitAction(func) {
        this._handleCardDelete = func;
    }

    setEventListeners() {
        super.setEventListeners();
        this._button.addEventListener('click', ()=>{
            this._handleCardDelete(this._element);
        })
    }

}