import axios from "../AxiosSetup";

export default class Api {
  static authorization(login, password) {
    return axios
      .post("/authorization.php", {
        login: login,
        password: password,
      })
      .then((res) => res.data);
  }
}
