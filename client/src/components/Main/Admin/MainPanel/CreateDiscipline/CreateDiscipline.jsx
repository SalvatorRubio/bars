import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import FormInput from "./FormInput/FormInput";
import HoursInput from "./HoursInput/HoursInput";
import SelectSpeciality from "./SelectSpeciality/SelectSpeciality";
import { useForm, FormProvider } from "react-hook-form";

const CreateDiscipline = () => {
  const methods = useForm({
    defaultValues: {
      discipline: "",
      speciality: "",
      hours: "",
      semester: "",
      practice: "",
      lections: "",
      labWorks: "",
      courseWork: "",
      offset: "",
      exam: "",
      homework: "",
    },
  });

  const createDiscipline = (data) => {
    const {
      discipline,
      speciality,
      hours,
      semester,
      practice,
      lections,
      labWorks,
      courseWork,
      offset,
      exam,
      homework,
    } = data;
    AdminApi.insertDiscipline(
      discipline,
      speciality,
      hours,
      semester,
      practice,
      lections,
      labWorks,
      courseWork,
      offset,
      exam,
      homework
    );
  };

  useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
      methods.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [methods.formState]);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(createDiscipline)}>
        <Box display="flex" flexDirection="column">
          <Typography
            variant="h6"
            sx={{ width: "100%", mb: 2, textAlign: "center" }}
          >
            Создание дисциплины
          </Typography>
          <FormInput name="discipline" text="дисциплину" label="Дисциплина" />
          <SelectSpeciality />
          <FormInput
            name="hours"
            type="number"
            text="общее количество часов"
            label="Часы"
          />
          <FormInput
            name="semester"
            type="number"
            text="семестр"
            label="Семестр"
          />

          <Typography
            sx={{
              width: "100%",
              borderTop: "1px solid #ccc",
              margin: "10px 0 20px 0",
              pt: "10px",
            }}
            variant="h6"
          >
            Распределение часов по типам уроков
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              m: "5px 0",
            }}
          >
            <HoursInput text="Практические работы" name="practice" />
            <HoursInput text="Лекции" name="lections" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              m: "5px 0",
            }}
          >
            <HoursInput text="Лабораторные работы" name="labWorks" />
            <HoursInput text="Курсовые работы" name="courseWork" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              m: "5px 0",
            }}
          >
            <HoursInput text="Зачет" name="offset" />
            <HoursInput text="Экзамен" name="exam" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              m: "5px 0",
            }}
          >
            <HoursInput text="Самостоятельные работы" name="homework" />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              mt: "20px",
            }}
          >
            <Button type="sumbit" variant="contained">
              Создать дисциплину
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};

export default CreateDiscipline;
