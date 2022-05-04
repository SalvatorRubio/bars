import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import FormInput from "./FormInput/FormInput";
import SelectCategory from "./SelectCategory/SelectCategory";
import SelectTeacher from "./SelectTeacher/SelectTeacher";

const EditTeacher = () => {
  const [teacher, setTeacher] = useState("");
  const [allInfoTeacher, setAllInfoTeacher] = useState([]);
  useEffect(() => {
    AdminApi.getOneTeacher(teacher).then((res) => {
      setAllInfoTeacher(res);
    });
  }, [teacher]);
  const handleClick = () => {
    AdminApi.updateTeacher(allInfoTeacher).then(() => {
      setAllInfoTeacher([]);
      setTeacher("");
    });
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h6"
        sx={{ width: "100%", mb: 2, textAlign: "center" }}
      >
        Изменение учителя
      </Typography>
      <SelectTeacher setTeacher={setTeacher} teacher={teacher} />
      {allInfoTeacher.map((item) => {
        return (
          <React.Fragment key={item}>
            <FormInput
              label="Фамилия"
              value={item.surname}
              valueKey="surname"
              arr={allInfoTeacher}
              setValue={setAllInfoTeacher}
              text="фамилию"
              type="text"
            />
            <FormInput
              label="Имя"
              value={item.name}
              valueKey="name"
              arr={allInfoTeacher}
              setValue={setAllInfoTeacher}
              text="имя"
              type="text"
            />
            <FormInput
              label="Отчество"
              value={item.father_name}
              valueKey="father_name"
              arr={allInfoTeacher}
              setValue={setAllInfoTeacher}
              text="отчество"
              type="text"
            />
            <SelectCategory
              value={item.category}
              valueKey="category"
              arr={allInfoTeacher}
              setValue={setAllInfoTeacher}
            />
            <FormInput
              label="Email"
              value={item.email}
              valueKey="email"
              arr={allInfoTeacher}
              setValue={setAllInfoTeacher}
              text="Email"
              type="email"
            />
            <FormInput
              label="Номер телефона"
              value={item.phone}
              valueKey="phone"
              arr={allInfoTeacher}
              setValue={setAllInfoTeacher}
              text="номер телефона"
              type="text"
            />
            <FormInput
              label="Логин"
              value={item.login}
              valueKey="login"
              arr={allInfoTeacher}
              setValue={setAllInfoTeacher}
              text="логин"
              type="text"
            />
            <FormInput
              label="Пароль"
              value={item.password}
              valueKey="password"
              arr={allInfoTeacher}
              setValue={setAllInfoTeacher}
              text="пароль"
              type="text"
            />
          </React.Fragment>
        );
      })}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mt: "20px",
        }}
      >
        <Button onClick={handleClick} variant="contained">
          Изменить учителя
        </Button>
      </Box>
    </Box>
  );
};

export default EditTeacher;
