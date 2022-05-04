import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import ruLocale from "date-fns/locale/ru";
import { Typography, TextField } from "@mui/material";

const DatepickerShedule = ({ setDate, date }) => {
  return (
    <>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Введите дату
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
        <DatePicker
          mask="__.__.____"
          value={date}
          onChange={(newValue) => setDate(newValue)}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  );
};

export default DatepickerShedule;
