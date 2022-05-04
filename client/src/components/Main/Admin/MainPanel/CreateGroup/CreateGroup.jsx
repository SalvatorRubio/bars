import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import FormButton from "./FormButton/FormButton";
import InputForm from "./InputForm/InputForm";
import SelectClassroomTeacher from "./SelectClassroomTeacher/SelectClassroomTeacher";
import SelectSpeciality from "./SelectSpeciality/SelectSpeciality";
import SemesterInput from "./SemesterInput/SemesterInput";
import YearPicker from "./YearPicker/YearPicker";

const CreateGroup = () => {
  const [speciality, setSpeciality] = useState("");
  const [year, setYear] = useState(new Date());
  const [teacher, setTeacher] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const { numGroup, course, startSemester, endSemester } = target;
    AdminApi.insertGroup(
      year,
      speciality,
      numGroup.value,
      course.value,
      teacher,
      startSemester.value,
      endSemester.value
    ).then(() => {
      setSpeciality("");
      setYear("");
      setTeacher("");
      startSemester.value = "";
      endSemester.value = "";
      numGroup.value = "";
      course.value = "";
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography
        variant="h6"
        sx={{ width: "100%", mb: 2, textAlign: "center" }}
      >
        Создание группы
      </Typography>
      <YearPicker year={year} setYear={setYear} />
      <SelectSpeciality setSpeciality={setSpeciality} speciality={speciality} />
      <InputForm label="Номер группы" name="numGroup" text="номер группы" />
      <InputForm label="Курс" name="course" text="курс" />
      <SelectClassroomTeacher teacher={teacher} setTeacher={setTeacher} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          m: "5px 0",
        }}
      >
        <SemesterInput
          label="Семестр"
          width="250px"
          name="startSemester"
          textAlign="left"
          text="Начало семестра"
        />
        <SemesterInput
          label="Семестр"
          width="200px"
          name="endSemester"
          textAlign="center"
          text="Конец семестра"
        />
      </Box>
      <FormButton />
    </form>
  );
};

export default CreateGroup;
