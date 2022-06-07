class Authentication {
  constructor() {}

  static isAuthenticate = false;

  Login = async (loginPayload, callBack) => {
    let successLogin = true;
    let message = "Hi I'm a message";
    if (
      loginPayload.Username === "a@gmail.com" &&
      loginPayload.Passwrd === "a"
    ) {
      successLogin = true;
      message = "Success";
      this.isAuthenticate = true;
    } else {
      successLogin = false;
      message = "Login failed, wrong username or password";
      this.isAuthenticate = false;
    }
    //
    callBack(successLogin, message);
  };

  IsAuthenticate() {
    return this.isAuthenticate;
  }

  IsAuthorize(authorizeKey) {
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
