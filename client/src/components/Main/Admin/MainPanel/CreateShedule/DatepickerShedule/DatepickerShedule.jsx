import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import ruLocale from "date-fns/locale/ru";
import { Controller, useFormContext } from "react-hook-form";
import { Typography, TextField } from "@mui/material";

const DatepickerShedule = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Введите дату
      </Typography>
      <Controller
        name="date"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
            <DatePicker
              mask="__.__.____"
              value={value}
              onChange={(newValue) => onChange(newValue)}
              renderInput={(params) => (
                <TextField
                  helperText={errors.date && "Выберите дату"}
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        )}
      />
    </>
  );
};

export default DatepickerShedule;
