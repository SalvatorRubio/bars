import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import Calendar from "./Calendar/Calendar";
import SelectDiscipline from "./SelectDiscipline/SelectDiscipline";
import TableTeacher from "./Table/TableTeacher";
import { useAuth } from "../../../hook/useAuth";
import { TeacherApi } from "../../../ClassesApi/TeacherApi";
import SelectGrops from "./SelectGroups/SelectGrops";
import SelectLessonType from "./SelectLessonType/SelectLessonType";

const useStyles = makeStyles({
  gridContainer: {
    paddingTop: "100px",
    textAlign: "center",
  },
  gridItemContainer: {
    borderBottom: "1px solid #ccc",
    borderTop: "1px solid #ccc",
    padding: "15px 0",
    overflowY: "hidden",
  },
});
const firstDate = new Date(new Date().setDate(new Date().getDate() - 14));
const lastDate = new Date(new Date().setDate(new Date().getDate() + 1));

const Teacher = () => {
  const classes = useStyles();
  const { group, id } = useAuth();
  const [dates, setDates] = useState([
    sessionStorage.getItem("firstDate")
      ? sessionStorage.getItem("firstDate")
      : firstDate,
    sessionStorage.getItem("lastDate")
      ? sessionStorage.getItem("lastDate")
      : lastDate,
  ]);
  const [discipline, setDiscipline] = useState(
    sessionStorage.getItem("discipline")
      ? sessionStorage.getItem("discipline")
      : ""
  );
  const [rows, setRows] = useState([]);
  const [lessonType, setLessonType] = useState([]);

  useEffect(() => {
    TeacherApi.getStudentAndMarks(
      id,
      group,
      discipline,
      lessonType,
      dates[0],
      dates[1]
    ).then((res) => setRows(res));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [discipline, dates, lessonType]);

  return (
    <Grid className={classes.gridContainer} container spacing={1}>
      <Grid container>
        <SelectGrops setDiscipline={setDiscipline} />
      </Grid>
      {group && (
        <Grid className={classes.gridItemContainer} container>
          <Calendar dates={dates} setDates={setDates} />
          <SelectDiscipline
            setDiscipline={setDiscipline}
            discipline={discipline}
          />
          <SelectLessonType
            lessonType={lessonType}
            setLessonType={setLessonType}
          />
        </Grid>
      )}
      <Grid container sx={{ overflowY: "hidden", width: "100%" }}>
        {dates && discipline && lessonType && (
          <TableTeacher
            dates={dates}
            discipline={discipline}
            lessonType={lessonType}
            rows={rows}
            setRows={setRows}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default Teacher;
