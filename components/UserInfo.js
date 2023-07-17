export default class UserInfo {
  constructor({ usernameSelector, userJobSelector }) {
    this._usernameElement = document.querySelector(usernameSelector);
    this._userJobElement = document.querySelector(userJobSelector);
  }

  getUserInfo() {
    return {
      userName: this._usernameElement.textContent,
    };
  }

  setUserInfo({ userName, userJob }) {
    this._usernameElement.textContent = userName;
    this._usernameElement.textContent = userJob;
  }
}
