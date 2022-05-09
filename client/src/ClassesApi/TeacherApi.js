import axios from "../AxiosSetup";
import { format } from "date-fns";

export class TeacherApi {
  static getDates(
    teacher,
    group,
    discipline,
    lessonType,
    firstDate,
    secondDate
  ) {
    let lessonTypeArr = [];
    lessonType.map((item) => {
      return lessonTypeArr.push(`"${item}"`);
    });
    let dateFrom = format(new Date(firstDate), "yyyy-MM-dd");
    let dateTo = format(new Date(secondDate), "yyyy-MM-dd");

    return axios
      .post("teacher/selectDates.php", {
        teacher: teacher,
        group: group,
        discipline: discipline,
        lessonType: lessonTypeArr.join(", "),
        dateFrom: dateFrom,
        dateTo: dateTo,
      })
      .then((res) => res.data);
  }

  static getStudentAndMarks(
    teacher,
    group,
    discipline,
    lessonType,
    firstDate,
    secondDate
  ) {
    let lessonTypeArr = [];
    lessonType.map((item) => {
      return lessonTypeArr.push(`"${item}"`);
    });

    let dateFrom = format(new Date(firstDate), "yyyy-MM-dd");
    let dateTo = format(new Date(secondDate), "yyyy-MM-dd");
    return axios
      .post("teacher/selectMarksAndStudents.php", {
        teacher: teacher,
        group: group,
        discipline: discipline,
        lessonType: lessonTypeArr.join(", "),
        dateFrom: dateFrom,
        dateTo: dateTo,
      })
      .then((res) => res.data);
  }

  static updateMark(student, shedule, mark) {
    return axios
      .post("teacher/updateMark.php", {
        student: student,
        shedule: shedule,
        mark: mark,
      })
      .then((res) => res.data);
  }

  static updateTopic(date, shedule, teacher, group, topic, lessonType) {
    let choosenDate = date.split(".");
    let myDate = new Date(choosenDate[2], choosenDate[1] - 1, choosenDate[0]);
    let now = format(new Date(myDate), "yyyy-MM-dd");

    return axios
      .post("teacher/updateTopic.php", {
        date: now,
        shedule: shedule,
        lessonType: lessonType,
        teacher: teacher,
        group: group,
        topic: topic,
      })
      .then((res) => res.data);
  }

  static getGroups(teacher) {
    return axios
      .post("teacher/selectGroups.php", {
        teacher: teacher,
      })
      .then((res) => res.data);
  }

  static getDisciplines(teacher, group) {
    return axios
      .post("teacher/selectDisciplines.php", {
        teacher: teacher,
        group: group,
      })
      .then((res) => res.data);
  }

  static getLessonType(shedule) {
    return axios
      .post("teacher/selectLessonType.php", {
        shedule: shedule,
      })
      .then((res) => res.data);
  }

  static getQualityKnowledge(
    firstDate,
    secondDate,
    discipline,
    group,
    lessonType
  ) {
    let dateFrom = format(new Date(firstDate), "yyyy-MM-dd");
    let dateTo = format(new Date(secondDate), "yyyy-MM-dd");
    let lessonTypeArr = [];
    lessonType.map((item) => {
      return lessonTypeArr.push(`"${item}"`);
    });
    return axios
      .post("teacher/selectQualityKnowledge.php", {
        startDate: dateFrom,
        endDate: dateTo,
        group: group,
        discipline: discipline,
        lessonType: lessonTypeArr.join(", "),
      })
      .then((res) => res.data);
  }

  static getAbsoluteKnowledge(
    firstDate,
    secondDate,
    discipline,
    group,
    lessonType
  ) {
    let lessonTypeArr = [];
    lessonType.map((item) => {
      return lessonTypeArr.push(`"${item}"`);
    });
    let dateFrom = format(new Date(firstDate), "yyyy-MM-dd");
    let dateTo = format(new Date(secondDate), "yyyy-MM-dd");
    return axios
      .post("teacher/selectAbsoluteKnowledge.php", {
        startDate: dateFrom,
        endDate: dateTo,
        group: group,
        discipline: discipline,
        lessonType: lessonTypeArr.join(", "),
      })
      .then((res) => res.data);
  }
}
