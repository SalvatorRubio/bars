import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import FormInput from "./FormInput/FormInput";
import SelectGroup from "./SelectGroup/SelectGroup";
import YearPicker from "./YearPicker/YearPicker";

const CreateStudent = () => {
  const [year, setYear] = useState(new Date());
  const [group, setGroup] = useState("");
  const [isCorrect, setCorret] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = e.target;
    const { secondName, firstName, fatherName, email, phone, login, pass } =
      target;
    AdminApi.insertStudent(
      secondName.value,
      firstName.value,
      fatherName.value,
      year,
      group,
      email.value,
      phone.value,
      login.value,
      pass.value
    ).then(() => {
      setCorret(true);
      setTimeout(() => setCorret(false), 3000);
      secondName.value = "";
      firstName.value = "";
      fatherName.value = "";
      setGroup("");
      email.value = "";
      phone.value = "";
      login.value = "";
      pass.value = "";
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Typography
        variant="h6"
        sx={{ width: "100%", mb: 2, textAlign: "center" }}
      >
        Создание студента
      </Typography>
      <FormInput label="Фамилия" name="secondName" type="text" text="фамилию" />
      <FormInput label="Имя" name="firstName" type="text" text="имя" />
      <FormInput
        label="Отчество"
        name="fatherName"
        type="text"
        text="отчество"
      />
      <YearPicker year={year} setYear={setYear} />
      <SelectGroup group={group} setGroup={setGroup} />
      <FormInput label="Email" name="email" type="email" text="Email" />
      <FormInput
        label="Номер телефона"
        name="phone"
        type="tel"
        text="номер телефона"
      />
      <FormInput label="Логин" name="login" type="text" text="логин" />
      <FormInput label="Пароль" name="pass" type="text" text="пароль" />
      <Typography
        sx={{
          height: "20px",
          width: "100%",
          textAlign: "center",
          color: "#028A0F",
        }}
      >
        {isCorrect ? "Ученик успешно создан" : ""}
      </Typography>
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
  );
};

export default CreateStudent;
