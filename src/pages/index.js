import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
// import Popup from "./components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {initialCards} from "../utils/initialCards.js";
import {
    enableValidation,
    popupEditProfile,
    popupAddCard,
    buttonAdd,
    buttonEdit,
    newName,
    newDescription,
    newPlace,
    newLink
} from "../utils/constants.js";

// Валидация форм
const profileValidator = new FormValidator(enableValidation, popupEditProfile);
const placeValidator = new FormValidator(enableValidation, popupAddCard);
profileValidator.enableValidation();
placeValidator.enableValidation();


const profilePopup = new PopupWithForm('.popup_type_edit', submitProfileForm);
const placePopup = new PopupWithForm('.popup_type_add', addPopupCard);
const imagePopup = new PopupWithImage('.popup_type_show');
const user = new UserInfo('.profile__title', '.profile__subtitle');


// Редактирование профиля
function submitProfileForm(input) {
    const name = input.name;
    const description = input.description;
    user.setUserInfo({name, description});
    profilePopup.close();
}

// Функция создания карточки
function createCard(data) {
    const handleCardClick = () => {
       imagePopup.open(data);
    };
    const card = new Card(data, 'template', handleCardClick);
    return card.getView();
}

// Рендерим карточки
const cardsSection = new Section({
    items: initialCards,
    renderer: (item) => {
        cardsSection.addItem(createCard(item));
    }
}, '.main');

cardsSection.renderItems();

// Функция для добавлении карточки из попапа
function addPopupCard(input) {
    const newCard = {
        name: input.place,
        link: input.link,
    };
    cardsSection.addItem(createCard(newCard));
    placePopup.close();
    newLink.value = '';
    newPlace.value = '';
}


buttonEdit.addEventListener('click', function () {
    profilePopup.open();
    const {name, description} = user.getUserInfo();
    // Делаем присваивание полей
    newName.value = name;
    newDescription.value = description;
    profileValidator.resetValidation();
});


buttonAdd.addEventListener('click', function () {
    placePopup.open();
    placeValidator.resetValidation();
});


profilePopup.setEventListeners();
placePopup.setEventListeners();
imagePopup.setEventListeners();



