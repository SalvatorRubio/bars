import React from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const ModalSelectLessonType = ({ handleChange, lessonType }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        m: "10px 0",
      }}
    >
      <Typography variant="p">Выберите тип урока</Typography>
      <FormControl>
        <InputLabel>Тип урока</InputLabel>
        <Select
          sx={{ width: "246px" }}
          value={lessonType}
          label="Тип урока"
          onChange={handleChange}
        >
          <MenuItem value="Практическая работа">Практическая работа</MenuItem>
          <MenuItem value="Теория">Теоретическая работа</MenuItem>
          <MenuItem value="Практическая-теоретическая работа">
            Практическая-Теоретическая работа
          </MenuItem>
          <MenuItem value="Самостоятельная работа">
            Самостоятельная работа
          </MenuItem>
          <MenuItem value="Аттестация">Аттестация</MenuItem>
          <MenuItem value="Лабораторная работа">Лабораторная работа</MenuItem>
          <MenuItem value="Экзамен">Экзамен</MenuItem>
          <MenuItem value="Зачет">Зачет</MenuItem>
          <MenuItem value="Курсовая работа">Курсовая работа</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ModalSelectLessonType;
