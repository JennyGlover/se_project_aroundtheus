import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import {
  initialCards,
  settings,
  galleryDisplay,
  nameInput,
  titleInput,
  imgUrlInput,
  descriptionInput,
  imgModalForm,
  editButton,
  addImgButton,
  profileForm,
  nameOfUser,
  jobOfUser,
} from "../utils/constants.js";
import "../pages/index.css";

// Creating a new instances of Classes-----------
const cardFormValidator = new FormValidator(settings, imgModalForm);
cardFormValidator.enableValidation();

const userInfo = new UserInfo(nameOfUser, jobOfUser);

const section = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = createCard(cardData);
      section.addItem(card);
    },
  },
  galleryDisplay
);

section.renderItems();

const profileFormModal = new PopupWithForm(
  ".profile-modal",
  handleProfileFormSubmit
);

const imgFormModal = new PopupWithForm(".img-modal", handleImgFormSubmit);
const imgDisplayPopup = new PopupWithImage(".display-modal");

//function that opens profile modal
function displayProfileModal() {
  const { name, description } = userInfo.getUserInfo();
  nameInput.value = name;
  descriptionInput.value = description;
  profileFormModal.open();
}

//function that opens img modal
function displayImgModal(e) {
  cardFormValidator.toggleButtonState();
  imgFormModal.open();
}

// function that closes img display modal
function handleCardClick(imageUrl, caption) {
  imgDisplayPopup.open(imageUrl, caption);
}

//function that saves profile modal inputs

function handleProfileFormSubmit(formData) {
  const { name, description } = formData;
  userInfo.setUserInfo(name, description);
  profileFormModal.close();
}

//function that save imgs modal inputs

function handleImgFormSubmit(inputValues) {
  const { title, link } = inputValues;
  const newCard = renderItems({ title, link });
  section.addItem(newCard);
  imgFormModal.close();
}

//function that creates cards
function createCard(item) {
  const card = new Card(item, "#profile__card-template", handleCardClick);
  return card.getView();
}

//Adding Event Listeners
editButton.addEventListener("click", displayProfileModal);
profileFormModal.setEventListeners();
addImgButton.addEventListener("click", displayImgModal);
imgFormModal.setEventListeners();
imgDisplayPopup.setEventListeners();

//Creating an instance of the form validator
const profileFormValidator = new FormValidator(settings, profileForm);

profileFormValidator.enableValidation();
