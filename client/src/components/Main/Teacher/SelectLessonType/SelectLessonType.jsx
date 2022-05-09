import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  Typography,
  OutlinedInput,
  ListItemText,
  Checkbox,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  formControl: {
    width: "100%",
    maxWidth: "300px",
    marginLeft: 10,
    marginTop: "8px",
  },
  select: {
    borderRadius: 5,
  },
});

const types = [
  "Практическая работа",
  "Практическая-теоретическая работа",
  "Теоретическая работа",
  "Аттестация",
  "Самостоятельная работа",
  "Лабораторная работа",
  "Экзамен",
  "Зачет",
  "Курсовая работа",
];

const SelectLessonType = ({ lessonType, setLessonType }) => {
  const classes = useStyles();
  const [isShow, setShow] = useState(false);

  const clearLessonType = () => {
    setLessonType([]);
  };

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      item
      xs={4}
    >
      <Typography>Выберите тип урока</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Тип урока</InputLabel>
        <Select
          className={classes.select}
          value={lessonType}
          multiple
          input={<OutlinedInput label="Тип урока" />}
          onChange={(e) => setLessonType(e.target.value)}
          renderValue={(selected) => selected.join(", ")}
        >
          {types.map((item) => {
            return (
              <MenuItem key={item} value={item}>
                <Checkbox checked={lessonType.indexOf(item) > -1} />
                <ListItemText primary={item} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <Typography
        sx={{
          color: "rgb(120,120,120)",
          cursor: "pointer",

          height: "10px",
        }}
        style={{ textDecoration: isShow ? "underline" : "" }}
        onClick={clearLessonType}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        variant="p"
      >
        {lessonType.length > 0 && "Очистить фильтрацию"}
      </Typography>
    </Grid>
  );
};

export default SelectLessonType;
