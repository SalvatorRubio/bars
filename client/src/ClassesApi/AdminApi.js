import axios from "../AxiosSetup";
import { format } from "date-fns";

export class AdminApi {
  static getAuditorium() {
    return axios.get("admin/selectAuditorium.php").then((res) => res.data);
  }

  static getGroups() {
    return axios.get("admin/selectGroups.php").then((res) => res.data);
  }

  static getDisciplines(id) {
    return axios
      .post("admin/selectDisciplines.php", {
        group: id,
      })
      .then((res) => res.data);
  }

  static getTeachGroupDiscipline(group, discipline) {
    return axios
      .post("admin/selectTeachGroupDiscipline.php", {
        group,
        discipline,
      })
      .then((res) => res.data);
  }

  static insertShedule(
    tomorrow,
    pair,
    auditorium,
    viewGroup,
    lessonType,
    teachGroupDisc
  ) {
    const date = format(new Date(tomorrow), "yyyy-MM-dd");
    const arr = [
      `"${date}"`,
      `"${pair}"`,
      `"${auditorium}"`,
      `"${viewGroup}"`,
      `"${lessonType}"`,
      `"${teachGroupDisc}"`,
    ];

    return axios
      .post("admin/insertShedule.php", {
        string: arr.join(),
      })
      .then((res) => res.data);
  }

  static insertTeacher(
    secondName,
    firstName,
    fatherName,
    category,
    email,
    phone,
    login,
    pass
  ) {
    const arr = [
      `"${firstName}"`,
      `"${fatherName}"`,
      `"${secondName}"`,
      `"${category}"`,
      `"${email}"`,
      `"${phone}"`,
      `"${login}"`,
      `"${pass}"`,
    ];

    return axios
      .post("admin/insertTeacher.php", {
        string: arr.join(),
      })
      .then((res) => res.data);
  }

  static getTeachers() {
    return axios("admin/selectTeachers.php").then((res) => res.data);
  }

  static deleteTeacher(id) {
    return axios
      .post("admin/deleteTeacher.php", {
        id: id,
      })
      .then((res) => res.data);
  }

  static insertTeachGroupDiscip(teacher, group, discip, course, semester) {
    const arr = [teacher, discip, group, course, semester];
    return axios
      .post("admin/insertTeachGroupDiscip.php", {
        string: arr.join(),
      })
      .then((res) => res.data);
  }

  static insertStudent(
    secondName,
    firstName,
    fatherName,
    year,
    group,
    email,
    phone,
    login,
    pass
  ) {
    const date = format(new Date(year), "yyyy-MM-dd");
    const arr = [
      `"${firstName}"`,
      `"${fatherName}"`,
      `"${secondName}"`,
      `"${date}"`,
      `"${group}"`,
      `"${email}"`,
      `"${phone}"`,
      `"${login}"`,
      `"${pass}"`,
    ];

    return axios
      .post("admin/insertStudent.php", {
        string: arr.join(),
      })
      .then((res) => res.data);
  }

  static getKickedStudents() {
    return axios.get("admin/selectKickedStudents.php").then((res) => res.data);
  }

  static updateStudent(student, group) {
    return axios
      .post("admin/updateStudent.php", {
        student: student,
        group: group,
      })
      .then((res) => res.data);
  }

  static getStudents(group) {
    return axios
      .post("admin/selectStudents.php", {
        group: group,
      })
      .then((res) => res.data);
  }

  static deleteStudent(student, text) {
    return axios
      .post("admin/deleteStudent.php", {
        student: student,
        text: text,
      })
      .then((res) => res.data);
  }

  static getSpeciality() {
    return axios.get("admin/selectSpeciality.php").then((res) => res.data);
  }

  static insertGroup(year, spec, number, course, teacher, semStart, semEnd) {
    const date = new Date(year).getFullYear();
    const arr = [
      `"${date}"`,
      `"${spec}"`,
      `"${number}"`,
      `"${course}"`,
      `"${teacher}"`,
      `"${semStart}"`,
      `"${semEnd}"`,
    ];
    return axios
      .post("admin/insertGroup.php", {
        string: arr.join(),
      })
      .then((res) => res.data);
  }

  static updateGroup(teacher, group, semStart, semEnd, num, course) {
    return axios
      .post("admin/updateGroup.php", {
        teacher: teacher,
        group: group,
        startSem: semStart,
        endSem: semEnd,
        num: num,
        course: course,
      })
      .then((res) => res.data);
  }

  static insertSpeciality(name, fullName, code, courses) {
    const arr = [`"${name}"`, `"${fullName}"`, `"${code}"`, `"${courses}"`];
    return axios
      .post("admin/insertSpeciality.php", {
        string: arr.join(),
      })
      .then((res) => res.data);
  }

  static insertAuditorium(number, name, type) {
    const arr = [`"${number}"`, `"${name}"`, `"${type}"`];
    return axios
      .post("admin/insertAuditorium.php", {
        string: arr.join(),
      })
      .then((res) => res.data);
  }

  static deleteAuditorium(auditorium) {
    return axios
      .post("admin/deleteAuditorium.php", {
        auditorium: auditorium,
      })
      .then((res) => res.data);
  }

  static insertAcademicPlan(semester, speciality, obj) {
    return obj.map((item) => {
      const arr = [
        `"${item.name}"`,
        `"${speciality}"`,
        `"${item.hours}"`,
        `"${semester}"`,
        `"${semester}"`,
        `"${item.lections}"`,
        `"${item.practice}"`,
        `"${item.labWork}"`,
        `"${item.exam}"`,
        `"${item.offset}"`,
        `"${item.homework}"`,
        `"${item.courseWork}"`,
      ];

      return axios
        .post("admin/insertDiscipline.php", {
          string: arr.join(),
        })
        .then((res) => res.data);
    });
  }

  static insertDiscipline(
    discip,
    spec,
    hours,
    semester,
    practice,
    lections,
    labWork,
    courseWork,
    offset,
    exam,
    homework
  ) {
    const arr = [
      `"${discip}"`,
      `"${spec}"`,
      `"${hours}"`,
      `"${semester}"`,
      `"${semester}"`,
      `"${lections}"`,
      `"${practice}"`,
      `"${labWork}"`,
      `"${exam}"`,
      `"${offset}"`,
      `"${homework}"`,
      `"${courseWork}"`,
    ];

    return axios
      .post("admin/insertDiscipline.php", {
        string: arr.join(),
      })
      .then((res) => res.data);
  }

  static getOneTeacher(id) {
    return axios
      .post("admin/selectOneTeacher.php", {
        teacher: id,
      })
      .then((res) => res.data);
  }

  static updateTeacher(arr) {
    const {
      teacher_id,
      surname,
      name,
      father_name,
      category,
      email,
      phone,
      login,
      password,
    } = arr[0];

    return axios
      .post("admin/updateTeacher.php", {
        teacher_id,
        surname,
        name,
        father_name,
        category,
        email,
        phone,
        login,
        password,
      })
      .then((res) => res.data);
  }

  static getDisciplinesSpeciality(speciality) {
    return axios
      .post("admin/selectDisciplinesSpeciality.php", {
        speciality: speciality,
      })
      .then((res) => res.data);
  }

  static getAllInfoDiscipline(discipline) {
    return axios
      .post("admin/selectAllInfoDiscipline.php", {
        discipline: discipline,
      })
      .then((res) => res.data);
  }

  static updateDiscipline(arr) {
    const {
      discipline_id,
      courseWork,
      name,
      exam,
      homework,
      hours,
      lab_works,
      lections,
      offset,
      practice,
      semester_begin,
    } = arr[0];

    return axios
      .post("admin/updateDiscipline.php", {
        discipline_id,
        courseWork,
        name,
        exam,
        homework,
        hours,
        lab_works,
        lections,
        offset,
        practice,
        semester_begin,
      })
      .then((res) => res.data);
  }
}
