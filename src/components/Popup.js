export default class Popup {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }

    open() {
        this._element.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (event) =>{
        if (event.key === "Escape") {
            this.close();
        }
    }

    close() {
        this._element.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners() {
        const popupCloseButton = this._element.querySelector('.popup__button-close');
        const popupOverlay = this._element.querySelector('.popup__overlay');
        popupCloseButton.addEventListener('click', () => this.close());
        popupOverlay.addEventListener('click', () => this.close());
    }
}