import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

import { closeModal, openModal } from "../utils/utils.js";

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
const userOccupation = documenGETt.querySelector(".profile__occupation");
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

//function that opens profile modal
function displayProfileModal(e) {
  openModal(profileModal);
  nameInput.value = userName.textContent;
  descriptionInput.value = userOccupation.textContent;
}
//function that opens img modal
function displayImgModal(e) {
  openModal(imgModal);
}

//function that closes profile modal
function closeProfileModal(e) {
  closeModal(profileModal);
}

function closeImgModal(e) {
  closeModal(imgModal);
}

//function that closes img display modal
function closeImgDisplayModal(e) {
  closeModal(imgDisplayModal);
}

//function that saves profile modal inputs
function handleProfileFormSubmit(e) {
  e.preventDefault();
  userName.textContent = nameInput.value;
  userOccupation.textContent = descriptionInput.value;
  closeProfileModal(e);
}

//function that save imgs modal inputs
function handleImgFormSubmit(e) {
  e.preventDefault();

  const newCard = {
    name: titleInput.value,
    link: imgUrlInput.value,
  };
  renderNewCard(newCard);

  titleInput.value = "";
  imgUrlInput.value = "";

  closeImgModal(e);
  cardFormValidator.toggleButtonState();
}

//function that creates cards
function createCard(item) {
  const card = new Card(item, "#profile__card-template");
  return card.getView();
}

//function that displays cards

function renderCard(data) {
  //creating the card template
  const cardElement = createCard(data);

  //adding the cloned card template to the gallery display
  galleryDisplay.append(cardElement);
}

//function that prepends card
function renderNewCard(data) {
  //creating the card template
  const cardElement = createCard(data);

  //adding the cloned card template to the gallery display

  galleryDisplay.prepend(cardElement);
}

initialCards.forEach(renderCard);

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
  // find the closest modal
  const modal = button.closest(".modal");
  // set the listener
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
profileModalForm.addEventListener("submit", handleProfileFormSubmit);

//event listeners for img modal buttons
addImgButton.addEventListener("click", displayImgModal);
imgModalForm.addEventListener("submit", handleImgFormSubmit);

const formElement = document.querySelector(".modal__container");

const profileFormValidator = new FormValidator(settings, formElement);

profileFormValidator.enableValidation();
