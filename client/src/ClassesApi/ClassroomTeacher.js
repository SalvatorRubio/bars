import axios from "../AxiosSetup";
import { format } from "date-fns";

export class ClassTeacher {
  static getDisciplines(group) {
    return axios
      .post("classroomTeacher/selectDisciplines.php", {
        id: group,
      })
      .then((res) => res.data);
  }

  static getGroups(teacher) {
    return axios
      .post("classroomTeacher/selectGroups.php", {
        id: teacher,
      })
      .then((res) => res.data);
  }

  static getStudents(group) {
    return axios
      .post("classroomTeacher/selectStudents.php", {
        id: group,
      })
      .then((res) => res.data);
  }

  static getMiddleMarks(student, firstDate, secondDate) {
    let dateFrom = format(new Date(firstDate), "yyyy-MM-dd");
    let dateTo = format(new Date(secondDate), "yyyy-MM-dd");
    return axios
      .post("classroomTeacher/selectMiddleMarks.php", {
        id: student,
        dateFrom: dateFrom,
        dateTo: dateTo,
      })
      .then((res) => res.data);
  }
}
