import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

import {
  closeModal,
  displayProfileModal,
  displayImgModal,
  handleProfileFormSubmit,
  handleImgFormSubmit,
} from "../utils/utils.js";

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

//function that creates cards
function createCard(item) {
  const card = new Card(cardData, "#profile__card-template");
  const cardElement = card.getview();

  //finding the card title and image
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  //setting the attributes of the image
  cardImage.setAttribute("src", item.link);
  cardImage.setAttribute("alt", item.name);

  //setting the card title
  cardTitle.textContent = item.name;

  return cardElement;
}

export function renderCard(data) {
  //creating the card template
  const cardElement = createCard(data);

  //adding the cloned card template to the gallery display
  galleryDisplay.append(cardElement);
}

initialCards.forEach(renderCard);

//finding the edit button
const editButton = document.querySelector(".profile__edit-button");
const addImgButton = document.querySelector(".profile__add-button");

//finding the forms
const profileModalForm = document.querySelector(".modal__container");
const imgModalForm = document.querySelector(".img-modal__container");

//finding form components
const modalForms = document.querySelectorAll(".modal");

// finding all close buttons
const closeButtons = document.querySelectorAll(".modal__close-button");

closeButtons.forEach((button) => {
  // find the closest modal
  const modal = button.closest(".modal");
  // set the listener
  button.addEventListener("click", () => closeModal(modal));
});

//closing forms with overlay
modalForms.forEach((form) => {
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
