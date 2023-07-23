import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import { closeModal } from "../utils/utils.js";
import Section from "../components/Section.js";

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

//finding the card template and gallery section
const galleryDisplay = document.querySelector(".gallery__cards");

//finding the modals display section
const profileModal = document.querySelector(".profile-modal");
const imgModal = document.querySelector(".img-modal");
const imgDisplayModal = document.querySelector(".display-modal");

//finding form components
const nameInput = document.querySelector("#name-input");
const titleInput = document.querySelector("#title-input");
const imgUrlInput = document.querySelector("#image-input");
const descriptionInput = document.querySelector("#about-input");
const userName = document.querySelector(".profile__username");
const userOccupation = document.querySelector(".profile__occupation");
const imgModalForm = document.querySelector(".img-modal__container");

const settings = {
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_active",
  inactiveButtonClass: "modal__save-button_inactive",
  formSelector: ".modal__container",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  fieldsetSelector: ".modal__fieldset",
};

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

// //function that prepends card
// function renderNewCard(data) {
//   const cardElement = createCard(data);
//   galleryDisplay.prepend(cardElement);
// }

//finding the edit button
const editButton = document.querySelector(".profile__edit-button");
const addImgButton = document.querySelector(".profile__add-button");

//finding the forms
const profileModalForm = document.querySelector(".modal__container");

//finding form components
const modals = document.querySelectorAll(".modal");

// finding all close buttons
const closeButtons = document.querySelectorAll(".modal__close-button");

closeButtons.forEach((button) => {
  const modal = button.closest(".modal");
  button.addEventListener("click", () => closeModal(modal));
});

//closing forms with overlay
modals.forEach((form) => {
  form.addEventListener("mousedown", (evt) => {
    if (evt.target === form) {
      if (form.classList.contains("modal_opened")) {
        closeModal(form);
      }
    }
  });
});

//event listeners profile modal for buttons
editButton.addEventListener("click", displayProfileModal);

// profileModalForm.addEventListener("submit", handleProfileFormSubmit);
profileFormModal.setEventListeners();

//event listeners for img modal buttons
addImgButton.addEventListener("click", displayImgModal);

// imgModalForm.addEventListener("submit", handleImgFormSubmit);
imgFormModal.setEventListeners();

const formElement = document.querySelector(".modal__container");

const profileFormValidator = new FormValidator(settings, formElement);

profileFormValidator.enableValidation();
