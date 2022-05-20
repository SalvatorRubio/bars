import { Box, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import FormInput from "./FormInput/FormInput";
import SelectGroup from "./SelectGroup/SelectGroup";
import YearPicker from "./YearPicker/YearPicker";

const CreateStudent = () => {
  const methods = useForm({
    defaultValues: {
      secondName: "",
      firstName: "",
      fatherName: "",
      year: new Date(),
      group: "",
      email: "",
      phone: "",
      login: "",
      pass: "",
    },
  });

  const createStudent = (data) => {
    const {
      secondName,
      firstName,
      fatherName,
      email,
      phone,
      login,
      group,
      pass,
      year,
    } = data;
    AdminApi.insertStudent(
      secondName,
      firstName,
      fatherName,
      year,
      group,
      email,
      phone,
      login,
      pass
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
      <form onSubmit={methods.handleSubmit(createStudent)}>
        <Typography
          variant="h6"
          sx={{ width: "100%", mb: 2, textAlign: "center" }}
        >
          Создание студента
        </Typography>
        <FormInput label="Фамилия" name="secondName" text="фамилию" />
        <FormInput label="Имя" name="firstName" type="text" text="имя" />
        <FormInput label="Отчество" name="fatherName" text="отчество" />
        <YearPicker />
        <SelectGroup />
        <FormInput label="Email" name="email" type="email" text="Email" />
        <FormInput
          label="Номер телефона"
          name="phone"
          type="tel"
          text="номер телефона"
        />
        <FormInput label="Логин" name="login" text="логин" />
        <FormInput label="Пароль" name="pass" text="пароль" />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            mt: "20px",
          }}
        >
          <Button type="submit" variant="contained">
            Создать студента
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
};

export default CreateStudent;
