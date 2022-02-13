import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
// import Popup from "./components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import {
    enableValidation,
    popupEditProfile,
    popupEditAvatar,
    popupAddCard,
    buttonAdd,
    buttonEdit,
    buttonEditAvatar,
    newName,
    newDescription,
    newPlace,
    popupButtonSave,
    popupButtonCreate,
    popupButtonChange,
    newLink
} from "../utils/constants.js";
import Popup from "../components/Popup";


const api = new Api('https://mesto.nomoreparties.co/v1/cohort-35',
    {
        authorization: 'ed992258-c9b2-4aaa-a5d2-85fccb4ac919',
        'Content-Type': 'application/json'
    });

// Валидация форм
const profileValidator = new FormValidator(enableValidation, popupEditProfile);
const placeValidator = new FormValidator(enableValidation, popupAddCard);
const avatarValidator = new FormValidator(enableValidation, popupEditAvatar);
profileValidator.enableValidation();
placeValidator.enableValidation();
avatarValidator.enableValidation();


const profilePopup = new PopupWithForm('.popup_type_edit', submitProfileForm);
const placePopup = new PopupWithForm('.popup_type_add', addPopupCard);
const imagePopup = new PopupWithImage('.popup_type_show');
const deletePopup = new PopupWithConfirm('.popup_type_delete');
const avatarPopup = new PopupWithForm('.popup_type_avatar', submitAvatarForm);
const user = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar-image');

// Функция создания карточки
function createCard(data) {
    const handleCardClick = () => {
        imagePopup.open(data);
    };
    const handleCardDelete = () => {
        deletePopup.open();
        deletePopup.setSubmitAction(() => {
            api.deleteCard(card.getCardId()).then(() => {
                card.removeCard();
                deletePopup.close();
            }).catch((err) => console.log(err));
        });
    }

    const handleCardLike = () => {
        if (card.isLike()) {
            api.deleteLike(card._id).then(() => {
                card.likeCard();
            }).catch((err) => console.log(err));
        } else {
            api.putLike(card._id).then(() => {
                card.likeCard();
            }).catch((err) => console.log(err));
        }
    }
    const card = new Card(data, 'template', handleCardClick, handleCardDelete, handleCardLike, user.getUserId());
    return card.getView();
}


// Рендерим карточки
const cardsSection = new Section({
    renderer: (item) => {
        cardsSection.addItem(createCard(item));
    }
}, '.main');


const userInfoPromise = api.getUserInfo().then((res) => {
    return res;
}).catch((err) => console.log(err));

const initialCardsPromise = api.getInitialCards().then((res) => {
    return res;
}).catch((err) => console.log(err));

Promise.all([userInfoPromise, initialCardsPromise]).then(([resUser, resCards]) => {
    const name = resUser.name;
    const description = resUser.about;
    const avatar = resUser.avatar;
    const id = resUser._id;
    user.setUserInfo({name, description, avatar, id});

    cardsSection.renderItems(resCards);
}).catch((err) => console.log(err));


// Редактирование профиля
function submitProfileForm(input) {
    popupButtonSave.textContent = 'Сохранение';
    api.patchUserInfo(input).then((res) => {
        user.setUserInfo({name: res.name, description: res.about, avatar: res.avatar, id: res._id});
        profilePopup.close();
    }).catch((err) => console.log(err))
        .finally(()=>{
            popupButtonSave.textContent = 'Сохранить';
        });
}

// Функция для добавлении карточки из попапа
function addPopupCard(input) {
    popupButtonCreate.textContent = 'Сохранение';
    const newCard = {
        name: input.place,
        link: input.link,
    };
    api.postCard(newCard).then((res) => {
        cardsSection.addItem(createCard(res));
        placePopup.close();
    }).catch((err) => console.log(err))
        .finally(()=>{
            popupButtonCreate.textContent = 'Создать';
        });

    newLink.value = '';
    newPlace.value = '';
}

// Изменения картинки аватара
function submitAvatarForm(input) {
    popupButtonChange.textContent = 'Сохранение';
    api.changeAvatar(input.link)
        .then((res) => {
            user.setUserInfo({
                name: res.name,
                description: res.about,
                avatar: input.link,
                id: res._id
            });
            avatarPopup.close();
        })
        .catch((err) => {
            console.log(err);
        }).finally(()=>{
        popupButtonChange.textContent = 'Сохранить';
    });

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

buttonEditAvatar.addEventListener('click', function () {
    avatarPopup.open();
    avatarValidator.resetValidation();
})


profilePopup.setEventListeners();
placePopup.setEventListeners();
imagePopup.setEventListeners();
deletePopup.setEventListeners();
avatarPopup.setEventListeners();



