import React from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const TypeLesson = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
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
      <Controller
        rules={{ required: true }}
        name="typeLesson"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl fullWidth error={!!errors.typeLesson}>
            <InputLabel>Тип урока</InputLabel>
            <Select value={value} label="Тип урока" onChange={onChange}>
              {types.map((item) => {
                return (
                  <MenuItem key={item.value} value={item.value}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
            {errors.typeLesson && (
              <FormHelperText>Выберите тип урока</FormHelperText>
            )}
          </FormControl>
        )}
      />
    </Box>
  );
};

export default TypeLesson;
