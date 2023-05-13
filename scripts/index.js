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

  cardElement.addEventListener("click", function (e) {
    //liking cards
    if (e.target && e.target.matches(".card__like-button")) {
      e.target.classList.toggle("card__like-button_active");
    }

    //removing cards
    if (e.target && e.target.matches(".card__trash")) {
      const trashButton = e.target;
      trashButton.closest(".card").remove();
    }

    //Opening display
    if (e.target && e.target.matches(".card__image")) {
      const displayImage = item.link;
      const displayText = item.name;
      const displayAlt = item.name;

      openModal(imgDisplayModal);
      displayModalImage.setAttribute("src", displayImage);
      displayModalText.textContent = displayText;
      displayModalImage.setAttribute("alt", displayAlt);
    }
  });

  return cardElement;
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

//finding the modals display section
const profileModal = document.querySelector(".profile-modal");
const imgModal = document.querySelector(".img-modal");
const imgDisplayModal = document.querySelector(".display-modal");
const displayModalImage = document.querySelector(".modal__image-display");
const displayModalText = document.querySelector(".modal__paragraph");

//finding the forms
const profileModalForm = document.querySelector(".modal__container");
const imgModalForm = document.querySelector(".img-modal__container");

//finding form components
const nameInput = document.querySelector("#name-input");
const titleInput = document.querySelector("#title-input");
const imgUrlInput = document.querySelector("#image-input");
const descriptionInput = document.querySelector("#about-input");
const userName = document.querySelector(".profile__username");
const cardTitle = document.querySelector(".card__title");
const userOccupation = document.querySelector(".profile__occupation");
const modalForms = document.querySelectorAll(".modal");

// finding all close buttons
const closeButtons = document.querySelectorAll(".modal__close-button");

closeButtons.forEach((button) => {
  // find the closest modal
  const modal = button.closest(".modal");
  // set the listener
  button.addEventListener("click", () => closeModal(modal));
});

//closing forms with Esc
function closeModalByEscape(evt) {
  if (evt.key === "Escape") {
    // search for an opened modal
    const openedModal = document.querySelector(".modal_opened");
    // close it
    closeModal(openedModal);
  }
}

//closing forms with overlay
modalForms.forEach((form) => {
  form.addEventListener("mousedown", (evt) => {
    if (evt.target === form) {
      if (form.classList.contains("modal_opened")) {
        form.classList.remove("modal_opened");
      }
    }
  });
});

//funtion for adding modal open class
function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeModalByEscape);
}
function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeModalByEscape);
}

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

//function that closes img modal
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
  toggleButtonState;
}

//event listeners profile modal for buttons
editButton.addEventListener("click", displayProfileModal);
profileModalForm.addEventListener("submit", handleProfileFormSubmit);

//event listeners for img modal buttons
addImgButton.addEventListener("click", displayImgModal);
imgModalForm.addEventListener("submit", handleImgFormSubmit);
