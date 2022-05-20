import React from "react";
import {
  Box,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const FormSelectType = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "5px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите тип преподавателя
      </Typography>
      <Controller
        rules={{ required: true }}
        control={control}
        name="type"
        render={({ field: { onChange, value } }) => (
          <FormControl fullWidth error={!!errors.category}>
            <InputLabel>Тип преподавателя</InputLabel>
            <Select value={value} label="Тип преподавателя" onChange={onChange}>
              <MenuItem value="0">Преподаватель</MenuItem>
              <MenuItem value="1">Классный руководитель</MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </Box>
  );
};

export default FormSelectType;
