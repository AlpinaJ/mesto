import Card from "./Card.js";
// Попапы

const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add');
const popupShowImage = document.querySelector('.popup_type_show');

// Кнопки в профиле
const popupCloseButtons = document.querySelectorAll('.popup__button-close');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');

// Переменные для работы с формой редактирования
const formEditProfile = document.querySelector('.popup__form_type_edit');
const newName = formEditProfile.querySelector('.popup__input_type_name');
const newDescription = formEditProfile.querySelector('.popup__input_type_description');
const name = document.querySelector('.profile__title');
const description = document.querySelector('.profile__subtitle');

// Переменные для работы с формой для создания места
const formAddCard = document.querySelector('.popup__form_type_add');
const newPlace = formAddCard.querySelector('.popup__input_type_place');
const newLink = formAddCard.querySelector('.popup__input_type_link');
const buttonCreate = formAddCard.querySelector('.popup__button-create');

// Переменные для работы с увеличинной картинкой
const popupImage = popupShowImage.querySelector('.popup__image');
const popupText = popupShowImage.querySelector('.popup__text');

const cardsContainer = document.querySelector('.main');
const cardTemplate = document.querySelector('template');

const popupOverlays = document.querySelectorAll('.popup__overlay');

// Функция увеличения картинки при клике на нее
function handleImageClick(name, link) {
    openPopup(popupShowImage);
    popupImage.src = link;
    popupImage.alt = name;
    popupText.textContent = name;
}

// Функция закрытия попапа нажатием клавишы Esc
function closePopupByEscape(event) {
    if (event.key === "Escape") {
        closePopup(document.querySelector(".popup_opened"));
    }
}

// Функции для открытия и закрытия попапов
function openPopup(popup) {
    popup.classList.add('popup_opened');
    // Ставим слушатель на клавиши, чтобы потом закрывать попап если был нажат esc
    document.addEventListener('keydown', closePopupByEscape);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByEscape);
}

// Редактирование профиля
function submitProfileForm(event) {
    event.preventDefault();
    name.textContent = newName.value;
    description.textContent = newDescription.value;
    closePopup(popupEditProfile);
}

buttonEdit.addEventListener('click', function () {
    openPopup(popupEditProfile);
    // Делаем присваивание полей
    newName.value = name.textContent;
    newDescription.value = description.textContent;
});

// Закрытие попапов
popupCloseButtons.forEach(button => button.addEventListener('click', function (event) {
    // Добираемся до попапа, которому принадлежит кнопка
    closePopup(event.target.closest('.popup'));
}));

formEditProfile.addEventListener('submit', submitProfileForm);

buttonAdd.addEventListener('click', function () {
    openPopup(popupAddCard);
});

popupOverlays.forEach((element) => {
    element.addEventListener('click', function (event) {
        closePopup(event.target.closest('.popup'));
    })
});

// Функция создания карточки
function createCard(data){
    const card = new Card(data, 'template', handleImageClick);
    return card.getView();
}

function render(){
    initialCards.forEach(card => cardsContainer.append(createCard(card)));
}

render();

formAddCard.addEventListener('submit', addPopupCard);

// function deleteCard(event) {
//     const card = event.target;
//     card.closest('.card').remove();
// }
//
// function createCard(card) {
//     const newCard = cardTemplate.content.cloneNode(true);
//     const cardImage = newCard.querySelector('.card__image');
//     const cardTitle = newCard.querySelector('.card__title');
//
//     // Записываем значения title,image, alt в карточку
//     cardTitle.textContent = card.name;
//     cardImage.alt = card.name;
//     cardImage.src = card.link;
//
//     // Лайк у карточки
//     const like = newCard.querySelector('.card__like');
//     like.addEventListener('click', function () {
//         like.classList.toggle('card__like_active');
//     });
//
//     // Удаление карточек
//     const trashButton = newCard.querySelector('.card__thrash');
//     trashButton.addEventListener('click', deleteCard);
//
//     // Увеличение картинки
//     cardImage.addEventListener('click', function () {
//         openPopup(popupShowImage);
//         popupImage.src = cardImage.src;
//         popupImage.alt = cardImage.name;
//         popupText.textContent = cardTitle.textContent;
//     })
//
//     return newCard;
// }
//
// function addCard(card) {
//     cardsContainer.prepend(card);
// }
//

// Функция для добавлении карточки из попапа
function addPopupCard(event) {
    event.preventDefault();
    const newCard = {
        name: newPlace.value,
        link: newLink.value,
    };

    cardsContainer.prepend(createCard(newCard));
    closePopup(popupAddCard);
    formAddCard.reset();
    buttonCreate.classList.add('popup__button-disabled');
    buttonCreate.disabled = true;
}



//initialCards.forEach(card => addCard(createCard(card)));

// formAddCard.addEventListener('submit', addPopupCard);


