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

//finding the card template and gallery section
const cardTemplate = document.querySelector("#profile__card-template").content;
const galleryDisplay = document.querySelector(".gallery__cards");
//finding card title and image

//function that displays cards
function getCardElement(data) {
  //cloning the card template
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  //adding the cloned card template to the gallery display
  galleryDisplay.append(cardElement);

  //finding the card title and image
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  //setting the attributes of the image
  cardImage.setAttribute("src", data.link);
  cardImage.setAttribute("alt", data.name);

  //setting the card title
  cardTitle.innerHTML = data.name;

  //adding the cloned card to the dallery display
  galleryDisplay.appendChild(cardElement);
}

for (let i = 0; i < initialCards.length; i++) {
  getCardElement(initialCards[i]);
}

//finding the edit button
const editButton = document.querySelector(".profile__edit-button");

//finding the template and modal display section
const profileTemplate = document.querySelector("#profile-template").content;
const modalDisplay = document.querySelector(".modal-display");

//cloning the modal template
const profileModal = profileTemplate
  .querySelector(".modal__container")
  .cloneNode(true);

//Finding X button for closing the modal
const modalCloseButton = profileModal.querySelector(".modal__close-button");

//adding the cloned modal to the modal display area
modalDisplay.append(profileModal);

//finding form components
const nameInput = profileModal.querySelector("#name");
const descriptionInput = profileModal.querySelector("#about-me");
const saveButton = profileModal.querySelector(".modal__save-button");
const userName = document.querySelector(".profile__username");
const userOccupation = document.querySelector(".profile__occupation");

//function that opens modal
function displayModal(e) {
  e.preventDefault();
  modalDisplay.classList.add("modal__opened");
}

//function that closes modal
function closeModal(e) {
  e.preventDefault();
  modalDisplay.classList.remove("modal__opened");
}

//function than save inputs unto
function handleProfileFormSubmit(e) {
  e.preventDefault();
  if (nameInput.value.length > 0) {
    userName.innerText = nameInput.value;
  }
  if (descriptionInput.value.length > 0) {
    userOccupation.innerText = descriptionInput.value;
  }
  modalDisplay.classList.remove("modal__opened");
}

//event listenters for buttons
editButton.addEventListener("click", displayModal);
modalCloseButton.addEventListener("click", closeModal);
saveButton.addEventListener("click", handleProfileFormSubmit);
