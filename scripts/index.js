const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__button-close');
const editButton = document.querySelector('.profile__edit-button');
const form = document.querySelector('.popup__form');
const newName = form.querySelector('.popup__input_type_name');
const newDescription = form.querySelector('.popup__input_type_description');
const name = document.querySelector('.profile__title');
const description = document.querySelector('.profile__subtitle');
// const card_likes = document.querySelectorAll('.card__like');
const cards = document.querySelector('.main');
const cardTemplate = document.querySelector('template');
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://images.unsplash.com/photo-1536308304182-5a2e0e04bb08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXpvcmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Челябинская область',
        link: 'https://images.unsplash.com/photo-1620998051604-95ff17ccc537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXpvcmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Иваново',
        link: 'https://images.unsplash.com/photo-1546526570-8f949b0d4a8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YXpvcmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Камчатка',
        link: 'https://images.unsplash.com/photo-1621417052569-88fbc513a50e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF6b3Jlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Холмогорский район',
        link: 'https://media.istockphoto.com/photos/costal-path-with-hydrangeas-sao-miguel-azores-portugal-picture-id944487332?b=1&k=20&m=944487332&s=170667a&w=0&h=gf7qveCrCdiNvTAU33Grg3MkPco-byfTgwWgl-U-dn0='
    },
    {
        name: 'Байкал',
        link: 'https://images.unsplash.com/photo-1621246308836-ea7d366c2795?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXpvcmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    }
];

function openPopup() {
    popup.classList.add('popup_opened');
    name.textContent = newName.value;
    description.textContent = newDescription.value;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function submitForm(event) {
    event.preventDefault();
    name.textContent = newName.value;
    description.textContent = newDescription.value;
    closePopup();
}

editButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

form.addEventListener('submit', submitForm);

function createCard (card){
    const newCard = cardTemplate.content.cloneNode(true);
    const cardImage = newCard.querySelector('.card__image');
    const cardTitle = newCard.querySelector('.card__title');

    //Записываем значения title,image, alt в карточку
    cardTitle.textContent = card.name;
    cardImage.alt = card.name;
    cardImage.src = card.link;

    return newCard;
}

function addCard(card){
    cards.prepend(card);
}

initialCards.forEach(card => addCard(createCard(card)));

// for (let i = 0; i < card_likes.length; i = i + 1) {
//     card_likes[i].addEventListener('click', function () {
//         if (card_likes[i].classList.contains('card__like_active')) {
//             card_likes[i].classList.remove('card__like_active');
//         } else {
//             card_likes[i].classList.add('card__like_active');
//         }
//     });
// }

