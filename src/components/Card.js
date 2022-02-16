export default class Card {
    constructor(data, cardSelector, handleCardClick, handleCardDelete, handleCardLike, userId) {
        this._name = data.name;
        this._link = data.link;
        this._likesNumber = data.likes.length;
        this._id = data._id;
        this._ownerId = data.owner._id;
        this._userId = userId;

        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleCardLike = handleCardLike;
        this._isLike = data.likes.some((like) => {
            return like._id === this._userId;
        })

    }

    // Нахожжение темплейта с данным селектором
    _getTemplate() {
        return document.querySelector(this._cardSelector)
            .content
            .querySelector('.card')
            .cloneNode(true);
    }

    getCardId() {
        return this._id;
    }

    isLike() {
        return this._isLike;
    }

    // Лайк карточки
    likeCard(likesCount) {
        this._isLike = !this._isLike;
        if (this._isLike) {
            this._like.classList.add('card__like_active');

        } else {
            this._like.classList.remove('card__like_active');
        }
        this._likesNumber = likesCount;
        this._likesCounter.textContent = this._likesNumber;
    }

    // Удаление карточки
    removeCard() {
        this._element.remove();
    }


    // Добавление обработчиков событий
    _setEventListeners() {
        if (this._isLike){
            this._like.classList.add('card__like_active');
        }
        this._like.addEventListener('click', () => { // При клике ставим лайк
            this._handleCardLike();
        });

        this._element.querySelector('.card__thrash').addEventListener('click', this._handleCardDelete);

        this._image.addEventListener('click', this._handleCardClick);
    }

    getView() {
        this._element = this._getTemplate();
        this._like = this._element.querySelector('.card__like');
        this._image = this._element.querySelector('.card__image');

        this._image.src = this._link;
        this._image.alt = this._name;
        this._element.querySelector('.card__title').textContent = this._name;
        this._likesCounter = this._element.querySelector('.card__likes-number');
        this._likesCounter.textContent = this._likesNumber;

        if (this._ownerId === this._userId) {
            this._element.querySelector('.card__thrash').classList.add('card__thrash_active');
        }

        this._setEventListeners();
        return this._element;
    }

}
