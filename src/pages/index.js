import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import {
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
  avatarOfUser,
} from "../utils/constants.js";
import "../pages/index.css";

let userId;
let section;
// Creating a new instances of Classes-----------
const cardFormValidator = new FormValidator(settings, imgModalForm);
cardFormValidator.enableValidation();

const userInfo = new UserInfo(nameOfUser, jobOfUser, avatarOfUser);

const profileFormModal = new PopupWithForm(
  ".profile-modal",
  handleProfileFormSubmit
);

const imgFormModal = new PopupWithForm(".img-modal", handleImgFormSubmit);
const imgDisplayPopup = new PopupWithImage(".display-modal");

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "d15f0643-7ba6-4697-8a04-5f83082b3085",
    "Content-Type": "application/json",
  },
});

//Loading user info and cards from the server simultaneously

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userInfo.setUserInfo(userData.name, userData.about);
    userInfo.setUserAvatar(userData.avatar);
    userId = userData._id;
    console.log("user info:", userData);
    console.log("Initial cards:", initialCards);

    section = new Section(
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
  })
  .catch((error) => {
    console.error(error);
  });

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
  const { name, link } = inputValues;
  const newCard = createCard({ name, link });
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
