import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import FormButton from "./FormButton/FormButton";
import FormInput from "./FormInput/FormInput";
import FormSelectCategory from "./FormSelectCategory/FormSelectCategory";
import { useForm, FormProvider } from "react-hook-form";
import FormSelectType from "./FormSelectType/FormSelectType";

const CreateTeacher = () => {
  const methods = useForm({
    defaultValues: {
      secondName: "",
      firstName: "",
      fatherName: "",
      email: "",
      category: "",
      phone: "",
      login: "",
      password: "",
      type: "",
    },
  });

  const createTeacher = (data) => {
    const {
      secondName,
      firstName,
      fatherName,
      email,
      category,
      phone,
      login,
      password,
      type,
    } = data;
    AdminApi.insertTeacher(
      secondName,
      firstName,
      fatherName,
      category,
      email,
      phone,
      login,
      password,
      type
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
      <form onSubmit={methods.handleSubmit(createTeacher)}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            sx={{ width: "100%", mb: 2, textAlign: "center" }}
          >
            Создание учителя
          </Typography>

          <FormInput label="Фамилия" text="фамилию" name="secondName" />
          <FormInput label="Имя" text="имя" name="firstName" />
          <FormInput label="Отчество" text="отчество" name="fatherName" />
          <FormSelectType />
          <FormSelectCategory />
          <FormInput label="Email" type="email" text="Email" name="email" />
          <FormInput
            label="Номер телефона"
            text="номер телефона"
            type="tel"
            name="phone"
          />
          <FormInput label="Логин" type="text" text="логин" name="login" />
          <FormInput label="Пароль" type="text" text="пароль" name="password" />
          <FormButton />
        </Box>
      </form>
    </FormProvider>
  );
};

export default CreateTeacher;
