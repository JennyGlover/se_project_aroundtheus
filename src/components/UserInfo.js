export default class UserInfo {
  constructor(nameElement, descriptionElement, avatar) {
    this._nameElement = nameElement;
    this._descriptionElment = descriptionElement;
    this._avatarElement = avatar;
  }

  getUserInfo() {
    const infoData = {};
    infoData["name"] = this._nameElement.textContent;
    infoData["description"] = this._descriptionElment.textContent;
    return infoData;
  }

  setUserInfo(name, description) {
    this._nameElement.textContent = name;
    this._descriptionElment.textContent = description;
  }

  setUserAvatar(avatar) {
    this._avatarElement.src = avatar;
  }
}
