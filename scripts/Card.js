export default class Card {
    constructor(data, cardSelector, handleImageClick) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._handleImageClick = handleImageClick;
    }

    // Нахожжение темплейта с данным селектором
    _getTemplate() {
        return document.querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
    }

    // Лайк карточки
    _handleLikeCard() {
        this._like.classList.toggle('card__like_active');
    }

    // Удаление карточки
    _handleDeleteCard() {
        this._element.remove();
    }

    // Добавление обработчиков событий
    _setEventListeners() {
        console.log(1, this._name, this._link);
        this._like = this._element.querySelector('.card__like');
        this._image = this._element.querySelector('.card__image');

        this._like.addEventListener('click', () => { // При клике ставим лайк
            this._handleLikeCard();
        });

        this._element.querySelector('.card__thrash').addEventListener('click', () => { // При клике удвляем карточку
            this._handleDeleteCard();
        });

        this._image.addEventListener('click',()=>{
            console.log(2, this._name, this._link);
            this._handleImageClick(this._name, this._link);
        })
    }

    getView() {
        this._element = this._getTemplate();
        this._element.querySelector('.card__image').src = this._link;
        this._element.querySelector('.card__image').alt = this._name;
        this._element.querySelector('.card__title').textContent = this._name;

        this._setEventListeners();
        return this._element;
    }

}
