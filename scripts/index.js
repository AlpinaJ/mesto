// Попапы
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');

// Кнопки в профиле
const popupCloseButtons = document.querySelectorAll('.popup__button-close');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

// Переменные для работы с формой редактирования
const editForm = document.querySelector('.popup__form_type_edit');
const newName = editForm.querySelector('.popup__input_type_name');
const newDescription = editForm.querySelector('.popup__input_type_description');
const name = document.querySelector('.profile__title');
const description = document.querySelector('.profile__subtitle');

// Переменные для работы с формой для создания места
const addForm = document.querySelector('.popup__form_type_add');
const newPlace = addForm.querySelector('.popup__input_type_place');
const newLink = addForm.querySelector('.popup__input_type_link');
const createButton = addForm.querySelector('.popup__button-create');

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

// Функции для открытия и закрытия попапов
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

// Редактирование профиля
function submitForm(event) {
    event.preventDefault();
    name.textContent = newName.value;
    description.textContent = newDescription.value;
    closePopup(event.target.closest('.popup'));
}

editButton.addEventListener('click', function () {
    openPopup(popupEdit);
    // Делаем присваивание полей
    name.textContent = newName.value;
    description.textContent = newDescription.value;
});

// Закрытие попапов
popupCloseButtons.forEach(button => button.addEventListener('click', function (event) {
    // Добираемся до попапа, которому принадлежит кнопка
    closePopup(event.target.closest('.popup'));
}));

editForm.addEventListener('submit', submitForm);

addButton.addEventListener('click', function () {
    newPlace.value = '';
    newLink.value = '';
    openPopup(popupAdd);
});

function createCard(card) {
    const newCard = cardTemplate.content.cloneNode(true);
    const cardImage = newCard.querySelector('.card__image');
    const cardTitle = newCard.querySelector('.card__title');

    // Записываем значения title,image, alt в карточку
    cardTitle.textContent = card.name;
    cardImage.alt = card.name;
    cardImage.src = card.link;

    // Лайк у карточки
    const like = newCard.querySelector('.card__like');
    like.addEventListener('click', function () {
        like.classList.toggle('card__like_active');
    });

    return newCard;
}

function addCard(card) {
    cards.prepend(card);
}

initialCards.forEach(card => addCard(createCard(card)));

function addPopupCard(event) {
    event.preventDefault();
    console.log(1);
    const newCard = {
        name: newPlace.value,
        link: newLink.value,
    };

    addCard(createCard(newCard));
    console.log(2);
    closePopup(popupAdd);
}

createButton.addEventListener('click', addPopupCard);