const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__button-close');
const editButton = document.querySelector('.profile_edit-button');
const form = document.querySelector('.popup__form');
const newName = form.querySelector('.popup__input-name');
const newDescription= form.querySelector('.popup__input-description');
const name = document.querySelector('.profile__title');
const description = document.querySelector('.profile__subtitle');

editButton.addEventListener('click', function () {
    popup.classList.add('popup_isOpen');
});

popupCloseButton.addEventListener('click', function () {
    popup.classList.remove('popup_isOpen');
});

function submitForm(event){
    event.preventDefault();
    name.textContent = newName.value;
    description.textContent = newDescription.value;
    popup.classList.remove('popup_isOpen');
}

form.addEventListener('submit',submitForm);



