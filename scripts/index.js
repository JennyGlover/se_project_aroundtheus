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
//function that prepends card
function getUserCardElement(data) {
  //creating the card template
  const cardElement = createCard(data);

  //adding the cloned card template to the gallery display
  galleryDisplay.prepend(cardElement);
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
const imgDisplayModal = document.querySelector(".img-display-modal")
//finding the forms
const modalForm = document.querySelector(".modal__form-container");
const imgModalForm = document.querySelector(".modal__img-form-container");

//Finding X button for closing the modals
const modalCloseButton = document.querySelector(".modal__close-button");
const imgModalCloseButton = document.querySelector(".modal__img-close-button");
const imgDisplayModalCloseButton = document.querySelector(".modal__img-display-close-button");

//finding form components
const nameInput = document.querySelector("#name");
const titleInput = document.querySelector("#title");
const imgUrlInput = document.querySelector("#image-url");
const descriptionInput = document.querySelector("#about-me");
const userName = document.querySelector(".profile__username");
const cardTitle = document.querySelector(".card__title")
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

//function that closes img display modal
function closeImgDisplayModal(e) {
  e.preventDefault();
  imgDisplayModal.classList.remove("modal_opened");
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

  if (titleInput.value.length > minLength && imgUrlInput.value.length > minLength ) {
 
  const newCards =[{
    name: titleInput.value,
    link: imgUrlInput.value
  }]
  newCards.forEach((newCard) => {
    getUserCardElement(newCard);
  })

  }
  closeImgModal(e);
  }

//event listeners profile modal for buttons
editButton.addEventListener("click", displayModal);
modalCloseButton.addEventListener("click", closeModal);
modalForm.addEventListener("submit", handleProfileFormSubmit);

//event listeners for img modal buttons
addImgButton.addEventListener("click", displayImgModal);
imgModalCloseButton.addEventListener("click", closeImgModal);
imgModalForm.addEventListener("submit", handleImgFormSubmit);


//event listener for current & future prepended card like buttons
galleryDisplay.addEventListener("click", function(e){
  //check if the target is a heart icon
  if(e.target && e.target.matches(".card__heart")) {  
    const likeButton = e.target;
    if(likeButton.getAttribute("src") === "images/heart.svg"){
      likeButton.setAttribute("src", "images/filled-heart.png");
    } else if (likeButton.getAttribute("src") === "images/filled-heart.png"){
      likeButton.setAttribute("src", "images/heart.svg");
    }
  }

});

//event listener for current & future trash buttons
galleryDisplay.addEventListener("click", function(e){
//check if the target is a trash icon
 if(e.target && e.target.matches(".card__trash")){
  const trashButton = e.target;
  trashButton.parentNode.parentNode.remove();
 }

})

//opening the display
galleryDisplay.addEventListener("click", function(e){
  //check if the target is a card image
   if(e.target && e.target.matches(".card__image")){
    const cardImageElement = e.target;
    const displayImage = cardImageElement.getAttribute("src")
    const displayText = cardImageElement.getAttribute("alt")

// function that opens img display
  imgDisplayModal.classList.add("modal_opened");
  const modalImage = document.querySelector(".modal__image-display")
  const modalText = document.querySelector(".img-display-modal__paragraph")
  modalImage.setAttribute("src", displayImage)
  modalText.textContent = displayText
  // cardImageElement.setAttribute("src", displayImage);

   }
  
  })

  //closing the display
imgDisplayModal.addEventListener("click", closeImgDisplayModal)





