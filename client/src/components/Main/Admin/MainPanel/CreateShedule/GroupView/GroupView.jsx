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

const GroupView = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите вид группы
      </Typography>
      <Controller
        rules={{ required: true }}
        name="groupView"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl fullWidth error={errors.groupView}>
            <InputLabel>Вид группы</InputLabel>
            <Select value={value} label="Вид группы" onChange={onChange}>
              <MenuItem value="Вся группа">Вся группа</MenuItem>
              <MenuItem value="1 п/г">Первая подгруппа</MenuItem>
              <MenuItem value="2 п/г">Вторая подгруппа</MenuItem>
            </Select>
            {errors.groupView && (
              <FormHelperText>Выберите вид группы</FormHelperText>
            )}
          </FormControl>
        )}
      />
    </Box>
  );
};

export default GroupView;
