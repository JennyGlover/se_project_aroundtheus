import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import "../pages/index.css";

//Image cards
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const cardData = {
  name: "Yosemite Valley",
  link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
};

//Finding the card template and gallery section
const galleryDisplay = document.querySelector(".gallery__cards");

//Finding form components
const nameInput = document.querySelector("#name-input");
const titleInput = document.querySelector("#title-input");
const imgUrlInput = document.querySelector("#image-input");
const descriptionInput = document.querySelector("#about-input");
const imgModalForm = document.querySelector(".img-modal__container");

//Form validation settings
const settings = {
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_active",
  inactiveButtonClass: "modal__save-button_inactive",
  formSelector: ".modal__container",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  fieldsetSelector: ".modal__fieldset",
};

// Creating a new instances of Classes

const cardFormValidator = new FormValidator(settings, imgModalForm);
cardFormValidator.enableValidation();

const userInfo = new UserInfo({
  usernameSelector: ".profile__username",
  userJobSelector: ".profile__occupation",
});

const section = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = createCard(cardData);
      section.addItem(card);
    },
  },
  galleryDisplay
);

section.renderItems();

const profileFormModal = new PopupWithForm(
  ".profile-modal",
  handleProfileFormSubmit
);

const imgFormModal = new PopupWithForm(".img-modal", handleImgFormSubmit);
const imgDisplayPopup = new PopupWithImage(".display-modal");

//function that opens profile modal
function displayProfileModal() {
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.userName;
  descriptionInput.value = userData.userJob;
  profileFormModal.open();
}
//function that opens img modal
function displayImgModal(e) {
  imgFormModal.open();
}

// function that closes img display modal
function handleCardClick(imageUrl, caption) {
  imgDisplayPopup.open(imageUrl, caption);
}

//function that saves profile modal inputs
function handleProfileFormSubmit() {
  userInfo.setUserInfo(nameInput.value, descriptionInput.value);
  profileFormModal.close();
}

//function that save imgs modal inputs
function handleImgFormSubmit() {
  const newCardData = {
    name: titleInput.value,
    link: imgUrlInput.value,
  };

  const newCard = createCard(newCardData);
  section.addItem(newCard);
  imgFormModal.close();
  cardFormValidator.toggleButtonState();
}

//function that creates cards
function createCard(item) {
  const card = new Card(item, "#profile__card-template", handleCardClick);
  return card.getView();
}

//finding the edit button
const editButton = document.querySelector(".profile__edit-button");
const addImgButton = document.querySelector(".profile__add-button");

//Adding Event Listeners
editButton.addEventListener("click", displayProfileModal);
profileFormModal.setEventListeners();
addImgButton.addEventListener("click", displayImgModal);
imgFormModal.setEventListeners();
imgDisplayPopup.setEventListeners();

//Form Validation

const formElement = document.querySelector(".modal__container");

const profileFormValidator = new FormValidator(settings, formElement);

profileFormValidator.enableValidation();
