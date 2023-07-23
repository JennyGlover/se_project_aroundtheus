export default class UserInfo {
  constructor({ usernameSelector, userJobSelector }) {
    this._usernameElement = document.querySelector(usernameSelector);
    this._userJobElement = document.querySelector(userJobSelector);
  }

  getUserInfo() {
    return {
      userName: this._usernameElement.textContent,
      userJob: this._userJobElement.textContent,
    };
  }

  setUserInfo(userName, userJob) {
    this._usernameElement.textContent = userName;
    this._userJobElement.textContent = userJob;
  }
}
