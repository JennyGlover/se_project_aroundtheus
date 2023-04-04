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

//function that displays cards
function getCardElement(data) {
  //creating the card template
  const cardElement = createCard(data);

  //adding the cloned card template to the gallery display
  galleryDisplay.append(cardElement);
}

initialCards.forEach((initialCard) => {
  getCardElement(initialCard);
})


//finding the edit button
const editButton = document.querySelector(".profile__edit-button");
const addImgButton = document.querySelector(".profile__add-button");

//finding the modals display section
const profileModal = document.querySelector(".profile-modal");
const imgModal = document.querySelector(".img-modal");

//finding the forms
const modalForm = document.querySelector(".modal__form-container");
const imgModalForm = document.querySelector(".modal__img-form-container");

//Finding X button for closing the modals
const modalCloseButton = document.querySelector(".modal__close-button");
const imgModalCloseButton = document.querySelector(".modal__img-close-button");

//finding form components
const nameInput = document.querySelector("#name");
const titleInput = document.querySelector("#title");
const imgUrlInput = document.querySelector("#image-url");
const descriptionInput = document.querySelector("#about-me");
const saveButton = document.querySelector(".modal__save-button");
const imageModalsaveButton = document.querySelector(".modal__img-save-button");
const userName = document.querySelector(".profile__username");
const cardTitle = document.querySelector("card__title")
//const imgSrc = document.querySelector()
const userOccupation = document.querySelector(".profile__occupation");

//function that opens profile modal
function displayModal(e) {
  e.preventDefault();
  profileModal.classList.add("modal_opened");
  nameInput.value = userName.textContent;
  descriptionInput.value = userOccupation.textContent;
}
//function that opens img modal
function displayImgModal(e) {
  e.preventDefault();
  imgModal.classList.add("modal_opened");
  titleInput.value = cardTitle.textContent;
  cardTitle.setAttribute(src, imgUrlInput.value );
}

//function that closes profile modal
function closeModal(e) {
  e.preventDefault();
  profileModal.classList.remove("modal_opened");
}

//function that closes img modal
function closeImgModal(e) {
  e.preventDefault();
  imgModal.classList.remove("modal_opened");
}

//function that saves profile modal inputs 
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
//function that save imgs modal inputs 
function handleImgFormSubmit(e) {
  e.preventDefault();
  const minLength = 0;
  if (titleInput.value.length > minLength) {
    titleInput.value = cardTitle.textContent;
  }
  if (imgUrlInput.value.length > minLength) {
    cardTitle.setAttribute(src, imgUrlInput.value );
  }
  closeImgModal(e);
}


//event listenters profile modal for buttons
editButton.addEventListener("click", displayModal);
modalCloseButton.addEventListener("click", closeModal);
modalForm.addEventListener("submit", handleProfileFormSubmit);

//event listenters for img modal buttons
addImgButton.addEventListener("click", displayImgModal);
imgModalCloseButton.addEventListener("click", closeImgModal);
imgModalForm.addEventListener("submit", handleImgFormSubmit);