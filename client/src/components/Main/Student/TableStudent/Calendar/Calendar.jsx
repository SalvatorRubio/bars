import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";
import ruLocale from "date-fns/locale/ru";
import { Box } from "@mui/material";

const Calendar = ({ dates, setDates }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        mb: 2,
      }}
    >
      <LocalizationProvider locale={ruLocale} dateAdapter={AdapterDateFns}>
        <Typography sx={{ mb: 1, textAlign: "center" }}>
          Выберите дату
        </Typography>
        <DateRangePicker
          startText="Начало"
          endText="Конец"
          inputFormat="dd.MM.yyyy"
          mask="__.__.____"
          value={dates}
          onChange={(newValue) => {
            setDates(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField sx={{ margin: "0px 10px" }} {...startProps} />
              <TextField sx={{ margin: "0px 10px" }} {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default Calendar;
