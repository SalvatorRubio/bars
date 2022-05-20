import axios from "../AxiosSetup";
import { format } from "date-fns";

export class StudentApi {
  static getShedule(date, group) {
    const tomorrow = format(new Date(date), "yyyy-MM-dd");
    return axios
      .post("student/selectShedule.php", {
        date: tomorrow,
        // date: "2022-03-27",
        group: group,
      })
      .then((res) => res.data);
  }

  static getDates(startDate, endDate) {
    const firstDate = format(new Date(startDate), "yyyy-MM-dd");
    const secondDate = format(new Date(endDate), "yyyy-MM-dd");

    return axios
      .post("student/selectDates.php", {
        firstDate: firstDate,
        secondDate: secondDate,
      })
      .then((res) => res.data);
  }

  static getMarks(student, startDate, endDate, discipline) {
    const firstDate = format(new Date(startDate), "yyyy-MM-dd");
    const secondDate = format(new Date(endDate), "yyyy-MM-dd");
    return axios
      .post("student/selectMarks.php", {
        student: student,
        firstDate: firstDate,
        secondDate: secondDate,
        discipline: discipline,
      })
      .then((res) => res.data);
  }

  static getDisciplines(group) {
    return axios
      .post("student/selectDisciplines.php", {
        group: group,
      })
      .then((res) => res.data);
  }

  static getMiddleMarks(student, startDate, endDate) {
    const firstDate = format(new Date(startDate), "yyyy-MM-dd");
    const secondDate = format(new Date(endDate), "yyyy-MM-dd");
    return axios
      .post("student/selectMiddleMarks.php", {
        student: student,
        firstDate: firstDate,
        secondDate: secondDate,
      })
      .then((res) => res.data);
  }
}
