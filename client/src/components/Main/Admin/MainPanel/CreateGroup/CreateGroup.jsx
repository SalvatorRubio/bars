import { Typography } from "@mui/material";
import React from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import FormButton from "./FormButton/FormButton";
import InputForm from "./InputForm/InputForm";
import SelectClassroomTeacher from "./SelectClassroomTeacher/SelectClassroomTeacher";
import SelectSpeciality from "./SelectSpeciality/SelectSpeciality";
import YearPicker from "./YearPicker/YearPicker";
import { useForm, FormProvider } from "react-hook-form";

const CreateGroup = () => {
  const methods = useForm({
    defaultValues: {
      year: new Date(),
      speciality: "",
      numGroup: "",
      course: "",
      teacher: "",
      semester: "",
    },
  });

  const createGroup = (data) => {
    const { year, speciality, numGroup, course, teacher, semester } = data;
    AdminApi.insertGroup(year, speciality, numGroup, course, teacher, semester);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(createGroup)}>
        <Typography
          variant="h6"
          sx={{ width: "100%", mb: 2, textAlign: "center" }}
        >
          Создание группы
        </Typography>
        <YearPicker />
        <SelectSpeciality />
        <InputForm label="Номер группы" name="numGroup" text="номер группы" />
        <InputForm label="Курс" name="course" text="курс" />
        <SelectClassroomTeacher />

        <InputForm label="Семестр" name="semester" text="семестр" />
        <FormButton />
      </form>
    </FormProvider>
  );
};

export default CreateGroup;
