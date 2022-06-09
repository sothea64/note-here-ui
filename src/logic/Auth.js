export const TOKEN_KEY = () => "nh_token";
class Authentication {
  constructor() {}

  #setAuthentication(token) {
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  #getAuthentication() {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  Login = async (loginPayload, callBack) => {
    let successLogin = true;
    let message = "";
    if (
      loginPayload.Username === "a@gmail.com" &&
      loginPayload.Passwrd === "a"
    ) {
      successLogin = true;
      message = "Success";
      this.#setAuthentication(true);
    } else {
      successLogin = false;
      message = "Login failed, wrong username or password";
      this.#setAuthentication(false);
    }
    //
    callBack(successLogin, message);
  };

  IsAuthenticate() {
    if (this.#getAuthentication() === undefined) {
      return false;
    }
    return this.#getAuthentication();
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
