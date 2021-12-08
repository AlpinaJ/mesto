// Попапы
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupShow = document.querySelector('.popup_type_show');

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

// Переменные для работы с увеличинной картинкой
const popupImage = popupShow.querySelector('.popup__image');
const popupText = popupShow.querySelector('.popup__text');

const cards = document.querySelector('.main');
const cardTemplate = document.querySelector('template');
const initialCards = [
    {
        name: 'Красно-золотая елка',
        link: 'https://images.unsplash.com/photo-1638836369642-8917176c47e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Гирлянда на елке',
        link: 'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hyaXN0bWFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Елка с носочками',
        link: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNocmlzdG1hc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Размытые огни',
        link: 'https://images.unsplash.com/photo-1603561128570-224a45ebc081?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNocmlzdG1hc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Котенька',
        link: 'https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNocmlzdG1hc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        name: 'Печеньки',
        link: 'https://images.unsplash.com/photo-1576665503527-f46e04d0844d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNocmlzdG1hc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
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

function deleteCard(event) {
    const card = event.target;
    card.closest('.card').remove();
}

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

    // Удаление карточек
    const trashButton = newCard.querySelector('.card__thrash');
    trashButton.addEventListener('click', deleteCard);

    // Увеличение картинки
    cardImage.addEventListener('click', function (){
        openPopup(popupShow);
        popupImage.src = cardImage.src;
        popupText.textContent = cardTitle.textContent;
    })

    return newCard;
}

function addCard(card) {
    cards.prepend(card);
}


initialCards.forEach(card => addCard(createCard(card)));

// Функция для добавлении карточки из попапа
function addPopupCard(event) {
    event.preventDefault();
    const newCard = {
        name: newPlace.value,
        link: newLink.value,
    };

    addCard(createCard(newCard));
    closePopup(popupAdd);
}

createButton.addEventListener('click', addPopupCard);