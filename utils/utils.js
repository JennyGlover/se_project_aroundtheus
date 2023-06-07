export * from "../utils/utils.js";

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

//funtion for adding modal open class
export function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeModalByEscape);
}
export function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeModalByEscape);
}

//function that opens profile modal
export function displayProfileModal(e) {
  openModal(profileModal);
  nameInput.value = userName.textContent;
  descriptionInput.value = userOccupation.textContent;
}
//function that opens img modal
export function displayImgModal(e) {
  openModal(imgModal);
}

//function that closes profile modal
export function closeProfileModal(e) {
  closeModal(profileModal);
}

export function closeImgModal(e) {
  closeModal(imgModal);
}

//function that closes img display modal
export function closeImgDisplayModal(e) {
  closeModal(imgDisplayModal);
}

//function that saves profile modal inputs
export function handleProfileFormSubmit(e) {
  e.preventDefault();
  userName.textContent = nameInput.value;
  userOccupation.textContent = descriptionInput.value;
  closeProfileModal(e);
}

//function that displays cards
export function renderCard(data) {
  //creating the card template
  const cardElement = createCard(data);

  //adding the cloned card template to the gallery display
  galleryDisplay.append(cardElement);
}
//function that prepends card
export function renderNewCard(data) {
  //creating the card template
  const cardElement = createCard(data);

  //adding the cloned card template to the gallery display
  galleryDisplay.prepend(cardElement);
}

//function that save imgs modal inputs
export function handleImgFormSubmit(e) {
  e.preventDefault();

  const newCard = {
    name: titleInput.value,
    link: imgUrlInput.value,
  };
  renderNewCard(newCard);

  titleInput.value = "";
  imgUrlInput.value = "";

  closeImgModal(e);
  toggleButtonState(
    Array.from(imgModalForm.querySelectorAll(validationConfig.inputSelector)),
    imgModalForm.querySelector(validationConfig.submitButtonSelector),
    validationConfig
  );
}

//closing forms with Esc
export function closeModalByEscape(evt) {
  if (evt.key === "Escape") {
    // search for an opened modal
    const openedModal = document.querySelector(".modal_opened");
    // close it
    closeModal(openedModal);
  }
}
