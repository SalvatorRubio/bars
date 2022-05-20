import { Box, Typography, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import ruLocale from "date-fns/locale/ru";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

const YearPicker = () => {
  const { control } = useFormContext();
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите год рождения
      </Typography>
      <Controller
        control={control}
        name="year"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
            <DatePicker
              label="Год рождения"
              mask="__.__.____"
              value={value}
              onChange={onChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        )}
      />
    </Box>
  );
};

export default YearPicker;
