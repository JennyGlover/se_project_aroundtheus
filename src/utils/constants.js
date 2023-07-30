//Image cards
export const initialCards = [
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

//Form validation settings
export const settings = {
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__input-error_active",
  inactiveButtonClass: "modal__save-button_inactive",
  formSelector: ".modal__container",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save-button",
  fieldsetSelector: ".modal__fieldset",
};

//Finding the card template and gallery section
export const galleryDisplay = document.querySelector(".gallery__cards");

//Finding form components
export const nameInput = document.querySelector("#name-input");
export const titleInput = document.querySelector("#title-input");
export const imgUrlInput = document.querySelector("#image-input");
export const descriptionInput = document.querySelector("#about-input");
export const imgModalForm = document.querySelector(".img-modal__container");
export const jobOfUser = document.querySelector(".profile__occupation");
export const nameOfUser = document.querySelector(".profile__username");

//finding the edit button
export const editButton = document.querySelector(".profile__edit-button");
export const addImgButton = document.querySelector(".profile__add-button");

//Form Validation
export const profileForm = document.querySelector(".modal__container");
