export{
    popupEditProfile,
    popupAddCard,
    popupEditAvatar,
    buttonEdit,
    buttonAdd,
    buttonEditAvatar,
    newName,
    newDescription,
    newPlace,
    newLink,
    profileButtonSave,
    cardButtonCreate,
    avatarButtonChange,
    enableValidation
}
// Попапы
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_add');
const popupEditAvatar = document.querySelector('.popup_type_avatar');

// Кнопки в профиле
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonEditAvatar = document.querySelector('.profile__avatar-image');

// Переменные для работы с формой редактирования
const formEditProfile = document.querySelector('.popup__form_type_edit');
const newName = formEditProfile.querySelector('.popup__input_type_name');
const newDescription = formEditProfile.querySelector('.popup__input_type_description');

// Переменные для работы с формой для создания места
const formAddCard = document.querySelector('.popup__form_type_add');
const newPlace = formAddCard.querySelector('.popup__input_type_place');
const newLink = formAddCard.querySelector('.popup__input_type_link');


const profileButtonSave = document.querySelector('.popup__button-save');
const cardButtonCreate = document.querySelector('.popup__button-create');
const avatarButtonChange = document.querySelector('.popup__button-change');

const enableValidation = ({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button-disabled',
    inputErrorClass: 'popup__input_type-error',
    errorClass: 'popup__error_visible'
});
