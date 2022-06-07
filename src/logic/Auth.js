class Authentication {
  constructor() {}

  static isAuthenticate = false;

  Login = async (loginPayload, callBack) => {
    let successLogin = true;
    let message = "Hi I'm a message";
    if (
      loginPayload.Username === "admin@gmail.com" &&
      loginPayload.Passwrd === "admin"
    ) {
      successLogin = true;
      message = "Success";
      this.isAuthenticate = true;
    } else {
      successLogin = false;
      message = "Falied";
      this.isAuthenticate = false;
    }
    //
    callBack(successLogin, message);
  };

  IsAuthenticate() {
    return this.isAuthenticate;
  }

  IsAuthorize() {
    return true;
  }
}

export class LoginPayload {
  constructor(username, password) {
    this.Username = username;
    this.Passwrd = password;
  }
  Username;
  Passwrd;
}

export default new Authentication();
