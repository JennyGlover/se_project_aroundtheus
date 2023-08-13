import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/popupWithConfirmation.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import {
  settings,
  galleryDisplay,
  nameInput,
  titleInput,
  imgUrlInput,
  initialCards,
  descriptionInput,
  imgModalForm,
  editButton,
  addImgButton,
  profileForm,
  nameOfUser,
  jobOfUser,
  avatarOfUser,
  deleteButton,
  deleteForm,
  avatarForm,
  avatarUpdateButton,
} from "../utils/constants.js";
import "../pages/index.css";

let userId;
let section;
// Creating a new instances of Classes-----------
const cardFormValidator = new FormValidator(settings, imgModalForm);
cardFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(settings, avatarForm);
avatarFormValidator.enableValidation();

const userInfo = new UserInfo(nameOfUser, jobOfUser, avatarOfUser);

const profileFormModal = new PopupWithForm(
  ".profile-modal",
  handleProfileFormSubmit
);
const avatarFormModal = new PopupWithForm(
  ".avatar-modal",
  handleAvatarFormSubmit
);

const imgFormModal = new PopupWithForm(".img-modal", handleImgFormSubmit);
const imgDisplayPopup = new PopupWithImage(".display-modal");
const deleteCardPopup = new PopupWithConfirmation(
  ".delete-modal",
  "Deleting..."
);
deleteCardPopup.setEventListeners();

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
  .catch(console.error);

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

function displayAvatarModal() {
  cardFormValidator.toggleButtonState();
  avatarFormModal.open();
}
// function that closes img display modal
function handleCardClick(imageUrl, caption) {
  imgDisplayPopup.open(imageUrl, caption);
}

//function that saves profile modal inputs

function handleProfileFormSubmit({ name, description }) {
  profileFormModal.setLoading(true);
  api
    .updateUserInfo(name, description)
    .then(() => {
      userInfo.setUserInfo(name, description);
      profileFormModal.close();
    })
    .catch(console.error)
    .finally(() => {
      profileFormModal.setLoading(false);
    });
}

//function that save imgs modal inputs

function handleImgFormSubmit({ name, link }) {
  api
    .createCards({ name, link })
    .then((cardData) => {
      const newCard = createCard(cardData);
      section.addItem(newCard);
      imgFormModal.close();
    })
    .catch(console.error);
}

//funtion to change avatar

function handleAvatarFormSubmit(inputValue) {
  avatarFormModal.setLoading(true);
  api
    .updateUserAvatar(inputValue.link)
    .then(() => {
      userInfo.setUserAvatar(inputValue.link);
      avatarFormModal.close();
    })
    .catch(console.error)
    .finally(() => {
      avatarFormModal.setLoading(false);
    });
}

//function that creates cards
function createCard(item) {
  const card = new Card(
    item,
    "#profile__card-template",
    handleCardClick,

    function handleDeleteCard() {
      deleteCardPopup.setConfirmAction(() => {
        deleteCardPopup.showLoading();

        //Executing the API Call within the confirmation action
        api
          .deleteCard(item._id)
          .then((res) => {
            card.deleteCardElement(res._id);
            deleteCardPopup.close();
          })
          .catch(console.error)
          .finally(() => {
            deleteCardPopup.hideLoading();
          });
      });
      deleteCardPopup.open();
    },

    function handleCardLike() {
      api
        .updateLikes(item._id, card.isLiked)
        .then((res) => {
          card.showLikes(res.isLiked);
        })
        .catch(console.error);
    }
  );
  return card.getView();
}

//Adding Event Listeners
editButton.addEventListener("click", displayProfileModal);
profileFormModal.setEventListeners();
addImgButton.addEventListener("click", displayImgModal);
imgFormModal.setEventListeners();
imgDisplayPopup.setEventListeners();
avatarFormModal.setEventListeners();
avatarUpdateButton.addEventListener("click", displayAvatarModal);

//Creating an instance of the form validator
const profileFormValidator = new FormValidator(settings, profileForm);
profileFormValidator.enableValidation();
