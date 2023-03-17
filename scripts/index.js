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

//function that creates cards
function createCard(item) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  return cardElement;
}

//function that displays cards
function getCardElement(data) {
  //creating the card template
  const cardElement = createCard(data);

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
}

for (let i = 0; i < initialCards.length; i++) {
  getCardElement(initialCards[i]);
}

//finding the edit button
const editButton = document.querySelector(".profile__edit-button");

//finding the template and modal display section
const profileModal = document.querySelector(".profile__modal");

//finding the form
const modalForm = document.querySelector(".modal__form-container");

//Finding X button for closing the modal
const modalCloseButton = document.querySelector(".modal__close-button");

//finding form components
const nameInput = document.querySelector("#name");
const descriptionInput = document.querySelector("#about-me");
const saveButton = document.querySelector(".modal__save-button");
const userName = document.querySelector(".profile__username");
const userOccupation = document.querySelector(".profile__occupation");
//function that opens modal
function displayModal(e) {
  e.preventDefault();
  profileModal.classList.add("modal_opened");
  nameInput.value = userName.textContent;
  descriptionInput.value = userOccupation.textContent;
}

//function that closes modal
function closeModal(e) {
  e.preventDefault();
  profileModal.classList.remove("modal_opened");
}

//function than save inputs unto
function handleProfileFormSubmit(e) {
  e.preventDefault();
  const minLength = 0;
  if (nameInput.value.length > minLength) {
    userName.textContent = nameInput.value;
  }
  if (descriptionInput.value.length > minLength) {
    userOccupation.textContent = descriptionInput.value;
  }
  closeModal(e);
}

//event listenters for buttons
editButton.addEventListener("click", displayModal);
modalCloseButton.addEventListener("click", closeModal);
modalForm.addEventListener("submit", handleProfileFormSubmit);
