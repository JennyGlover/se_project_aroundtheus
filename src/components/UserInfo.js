export default class UserInfo {
  constructor(nameElement, descriptionElement) {
    this._nameElement = nameElement;
    this._descriptionElment = descriptionElement;
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
}
