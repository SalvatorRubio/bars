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

  static getMiddleMarksAttestation(group, firstDate, secondDate) {
    let dateFrom = format(new Date(firstDate), "yyyy-MM-dd");
    let dateTo = format(new Date(secondDate), "yyyy-MM-dd");

    return axios
      .post("classroomTeacher/selectMiddleMarksAttestation.php", {
        group: group,
        dateFrom: dateFrom,
        dateTo: dateTo,
      })
      .then((res) => res.data);
  }

  static getMiddleMarksSession(group) {
    return axios
      .post("classroomTeacher/selectMiddleMarksSession.php", {
        group: group,
      })
      .then((res) => res.data);
  }

  static getQualityAttestationKnowledge(
    firstDate,
    secondDate,
    discipline,
    group
  ) {
    let dateFrom = format(new Date(firstDate), "yyyy-MM-dd");
    let dateTo = format(new Date(secondDate), "yyyy-MM-dd");
    return axios
      .post("classroomTeacher/selectQualityAttestationKnowledge.php", {
        dateFrom: dateFrom,
        dateTo: dateTo,
        discipline: discipline,
        group: group,
      })
      .then((res) => res.data);
  }

  static getAbsoluteAttestationKnowledge(
    firstDate,
    secondDate,
    discipline,
    group
  ) {
    let dateFrom = format(new Date(firstDate), "yyyy-MM-dd");
    let dateTo = format(new Date(secondDate), "yyyy-MM-dd");
    return axios
      .post("classroomTeacher/selectAbsoluteAttestationKnowledge.php", {
        dateFrom: dateFrom,
        dateTo: dateTo,
        discipline: discipline,
        group: group,
      })
      .then((res) => res.data);
  }

  static getAbsoluteSessionKnowledge(discipline, group) {
    return axios
      .post("classroomTeacher/selectAbsoluteSessionKnowledge.php", {
        discipline: discipline,
        group: group,
      })
      .then((res) => res.data);
  }

  static getQualitySessionKnowledge(discipline, group) {
    return axios
      .post("classroomTeacher/selectQualitySessionKnowledge.php", {
        discipline: discipline,
        group: group,
      })
      .then((res) => res.data);
  }
}
