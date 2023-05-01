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
    if (e.target && e.target.matches(".card__heart")) {
      e.target.classList.toggle("card__heart-active");
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

      openPopup(imgDisplayModal);
      displayModalImage.setAttribute("src", displayImage);
      displayModalText.textContent = displayText;
      displayModalImage.setAttribute("alt", displayAlt);
    }
  });

  return cardElement;
}

//function that displays cards
function getCardElement(data) {
  //creating the card template
  const cardElement = createCard(data);

  //adding the cloned card template to the gallery display
  galleryDisplay.append(cardElement);
}
//function that prepends card
function getUserCardElement(data) {
  //creating the card template
  const cardElement = createCard(data);

  //adding the cloned card template to the gallery display
  galleryDisplay.prepend(cardElement);
}

initialCards.forEach(getCardElement);

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
  // find the closest popup
  const popup = button.closest(".modal");
  // set the listener
  button.addEventListener("click", () => closePopup(popup));
});

//closing forms with Esc
document.addEventListener("keydown", (evt) => {
  const { key } = evt;
  if (key === "Escape") {
    modalForms.forEach((form) => {
      if (form.classList.contains("modal_opened")) {
        form.classList.remove("modal_opened");
      }
    });
  }
});

//closing forms with overlay
modalForms.forEach((form) => {
  form.addEventListener("click", (evt) => {
    if (evt.target === form) {
      if (form.classList.contains("modal_opened")) {
        form.classList.remove("modal_opened");
      }
    }
  });
});

//funtion for adding modal open class
function openPopup(popup) {
  popup.classList.add("modal_opened");
}
function closePopup(popup) {
  popup.classList.remove("modal_opened");
}

//function that opens profile modal
function displayProfileModal(e) {
  e.preventDefault();
  openPopup(profileModal);
  nameInput.value = userName.textContent;
  descriptionInput.value = userOccupation.textContent;
}
//function that opens img modal
function displayImgModal(e) {
  e.preventDefault();
  openPopup(imgModal);
}

//function that closes profile modal
function closeModal(e) {
  e.preventDefault();
  closePopup(profileModal);
}

//function that closes img modal
function closeImgModal(e) {
  e.preventDefault();
  closePopup(imgModal);
}

//function that closes img display modal
function closeImgDisplayModal(e) {
  e.preventDefault();
  closePopup(imgDisplayModal);
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

  if (
    titleInput.value.length > minLength &&
    imgUrlInput.value.length > minLength
  ) {
    const newCard = {
      name: titleInput.value,
      link: imgUrlInput.value,
    };
    getUserCardElement(newCard);

    titleInput.value = "";
    imgUrlInput.value = "";
  }
  closeImgModal(e);
}

//event listeners profile modal for buttons
editButton.addEventListener("click", displayProfileModal);
profileModalForm.addEventListener("submit", handleProfileFormSubmit);

//event listeners for img modal buttons
addImgButton.addEventListener("click", displayImgModal);
imgModalForm.addEventListener("submit", handleImgFormSubmit);

//func to show input error
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("modal__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("modal__input-error_active");
};

//func to hide input error
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("modal__input_type_error");
  errorElement.classList.remove("modal__input-error_active");
  errorElement.textContent = "";
};

//func to check hide check validity and hide or show error message
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

//func to check if form has an invalid input
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//func to toggle submit button
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_inactive");
  } else {
    buttonElement.classList.remove("button_inactive");
  }
};

//func that sets event listeners
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const buttonElement = formElement.querySelector(".modal__save-button");
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

//func that enables validation
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".modal__container"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(
      formElement.querySelectorAll(".modal__fieldset")
    );
    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);
    });
  });
};

enableValidation();
