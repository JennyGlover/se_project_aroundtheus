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

const editButton = document.querySelector(".profile__edit-button");
console.log(editButton);
let profiletemplate = document.querySelector("#profile-template").content;
let modalDisplay = document.querySelector(".modal-display");
let oldMan = document.querySelector(".profile__avatar");
let profileModal = profiletemplate
  .querySelector(".modal__container")
  .cloneNode(true);

let modalCloseButton = profileModal.querySelector(".modal__close-button");
modalDisplay.append(profileModal);

function displayModal(e) {
  e.preventDefault();
  modalDisplay.classList.add("modal__opened");
}

function closeModal(e) {
  e.preventDefault();
  modalDisplay.classList.remove("modal__opened");
}

editButton.addEventListener("click", displayModal);
modalCloseButton.addEventListener("click", closeModal);
