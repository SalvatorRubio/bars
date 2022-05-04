import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import FormButton from "./FormButton/FormButton";
import FormInput from "./FormInput/FormInput";
import FormSelect from "./FormSelect/FormSelect";

const CreateTeacher = () => {
  const [category, setCategory] = useState("");
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const {
      secondName,
      firstName,
      fatherName,
      email,
      category,
      phone,
      login,
      password,
    } = target;

    AdminApi.insertTeacher(
      secondName.value,
      firstName.value,
      fatherName.value,
      category.value,
      email.value,
      phone.value,
      login.value,
      password.value
    ).then(() => {
      secondName.value = "";
      firstName.value = "";
      fatherName.value = "";
      email.value = "";
      phone.value = "";
      login.value = "";
      password.value = "";
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h6"
          sx={{ width: "100%", mb: 2, textAlign: "center" }}
        >
          Создание учителя
        </Typography>
        <FormInput
          label="Фамилия"
          type="text"
          text="фамилию"
          name="secondName"
        />
        <FormInput label="Имя" type="text" text="имя" name="firstName" />
        <FormInput
          label="Отчество"
          type="text"
          text="отчество"
          name="fatherName"
        />
        <FormSelect handleChange={handleChange} category={category} />
        <FormInput label="Email" type="email" text="Email" name="email" />
        <FormInput
          label="Номер телефона"
          type="text"
          text="номер телефона"
          name="phone"
        />
        <FormInput label="Логин" type="text" text="логин" name="login" />
        <FormInput label="Пароль" type="text" text="пароль" name="password" />
        <FormButton />
      </Box>
    </form>
  );
};

export default CreateTeacher;
