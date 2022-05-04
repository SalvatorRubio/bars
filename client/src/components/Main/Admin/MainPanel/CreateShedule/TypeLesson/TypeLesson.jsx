import React from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const TypeLesson = ({ setTypeLesson, typeLesson }) => {
  const types = [
    {
      value: "Зачет",
      name: "Зачет",
    },
    {
      value: "Экзамен",
      name: "Экзамен",
    },
    {
      value: "Аттестация",
      name: "Аттестация",
    },
    {
      value: "Курсовая работа",
      name: "Курсовые",
    },
    {
      value: "Практическая работа",
      name: "Практические",
    },
    {
      value: "Лабораторная работа",
      name: "Лабораторные",
    },
    {
      value: "Теоретическая работа",
      name: "Теория",
    },
    {
      value: "Практическая-теоретическая работа",
      name: "Практические-теоретические",
    },
  ];
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите тип урока
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Тип урока</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={typeLesson}
          label="Тип урока"
          onChange={(e) => setTypeLesson(e.target.value)}
        >
          {types.map((item) => {
            return (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default TypeLesson;
