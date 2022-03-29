import axios from "./AxiosSetup";

export default class Api {
  static authorization(login, password) {
    return axios
      .post("/authorization.php", {
        login: login,
        password: password,
      })
      .then((res) => res.data);
  }

  static getMarksForStudent() {
    return axios.get("/authorization.php").then((res) => res.data);
  }

  static selectStudentAndMarksForTeacher() {
    return axios
      .get("/selectStudentAndMarksForTeacher.php")
      .then((res) => res.data);
  }
}
