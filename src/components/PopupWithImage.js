import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup{
    constructor(selector) {
        super(selector);
        this._link = this._element.querySelector('.popup__image').src;
        this._name = this._element.querySelector('.popup__text').textContent;
    }

    open({name,link}){
        super.open();
        this._element.querySelector('.popup__image').src = link;
        document.querySelector('.popup__image').alt = name;
        document.querySelector('.popup__text').textContent = name;
    }
}