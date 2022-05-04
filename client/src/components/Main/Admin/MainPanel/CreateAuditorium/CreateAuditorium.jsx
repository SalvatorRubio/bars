import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import FormInput from "./FormInput/FormInput";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";

const CreateAuditorium = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const handleClick = () => {
    AdminApi.insertAuditorium(number, name, type).then((res) => {
      setNumber("");
      setName("");
      setType("");
    });
  };
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ width: "100%", mb: 2, textAlign: "center" }}
      >
        Создание аудитории
      </Typography>
      <FormInput
        type="text"
        setValue={setNumber}
        value={number}
        text="номер аудитории"
        label="Номер аудитории"
      />
      <FormInput
        type="text"
        setValue={setName}
        value={name}
        text="название аудитории"
        label="Название аудитории"
      />
      <FormInput
        type="text"
        setValue={setType}
        value={type}
        text="тип аудитории"
        label="Тип аудитории"
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
          Создать аудиторию
        </Button>
      </Box>
    </Box>
  );
};

export default CreateAuditorium;
