const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__button-close');
const editButton = document.querySelector('.profile_edit-button');
const form = document.querySelector('.popup__form');
const newName = form.querySelector('.popup__input-name');
const newDescription = form.querySelector('.popup__input-description');
const name = document.querySelector('.profile__title');
const description = document.querySelector('.profile__subtitle');
const card_likes = document.querySelectorAll('.card__like');

editButton.addEventListener('click', function () {
    popup.classList.add('popup_isOpen');
});

popupCloseButton.addEventListener('click', function () {
    popup.classList.remove('popup_isOpen');
});

function submitForm(event) {
    event.preventDefault();
    name.textContent = newName.value;
    description.textContent = newDescription.value;
    popup.classList.remove('popup_isOpen');
}

form.addEventListener('submit', submitForm);

for (let i = 0; i < card_likes.length; i = i + 1) {
    card_likes[i].addEventListener('click', function () {
        if (card_likes[i].classList.contains('card__like-active')) {
            card_likes[i].classList.remove('card__like-active');
        } else {
            card_likes[i].classList.add('card__like-active');
        }
    });
}

