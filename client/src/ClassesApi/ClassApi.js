import axios from "../AxiosSetup";

export class ClassApi {
  static authorization(login, password) {
    return axios
      .post("authorization.php", {
        login: login,
        password: password,
      })
      .then((res) => res.data);
  }

  static updatePassword(role, newPass, id, oldPass) {
    return axios
      .post("updatePassword.php", {
        role: role,
        newPassword: newPass,
        id: id,
        oldPassword: oldPass,
      })
      .then((res) => res.data);
  }
}
