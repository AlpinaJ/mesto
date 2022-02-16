import Popup from "../components/Popup.js";

export default class PopupWithImage extends Popup{
    constructor(selector) {
        super(selector);
        this._image = this._element.querySelector('.popup__image');
        this._caption = this._element.querySelector('.popup__text');
    }

    open({name,link}){
        super.open();
        this._image.src = link;
        this._image.alt = name;
        this._caption.textContent = name;
    }
}