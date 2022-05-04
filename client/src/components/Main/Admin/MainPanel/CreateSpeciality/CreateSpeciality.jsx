import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import FormInput from "./FormInput/FormInput";

const CreateSpeciality = () => {
  const [nameGroup, setNameGroup] = useState("");
  const [fullNameGroup, setFullNameGroup] = useState("");
  const [codeGroup, setCodeGroup] = useState("");
  const [courses, setCourses] = useState("");

  const handleClick = () => {
    AdminApi.insertSpeciality(
      nameGroup,
      fullNameGroup,
      codeGroup,
      courses
    ).then(() => {
      setNameGroup("");
      setFullNameGroup("");
      setCodeGroup("");
      setCourses("");
    });
  };

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ width: "100%", mb: 2, textAlign: "center" }}
      >
        Создание специальности
      </Typography>
      <FormInput
        setValue={setNameGroup}
        value={nameGroup}
        label="Название"
        type="text"
        text="короткое название группы"
      />
      <FormInput
        setValue={setFullNameGroup}
        value={fullNameGroup}
        label="Название"
        type="text"
        text="полное название группы"
      />
      <FormInput
        setValue={setCodeGroup}
        value={codeGroup}
        label="Код"
        type="text"
        text="код группы"
      />
      <FormInput
        setValue={setCourses}
        value={courses}
        label="Курсы"
        type="number"
        text="количество курсов"
      />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mt: "20px",
        }}
      >
        <Button onClick={handleClick} variant="contained">
          Создать специальность
        </Button>
      </Box>
    </Box>
  );
};

export default CreateSpeciality;
