import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useAuth } from "../../../../hook/useAuth";
import { StudentApi } from "../../../../ClassesApi/StudentApi";
import { format } from "date-fns";

const now = new Date();
const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);

const SheduleStudent = () => {
  const [date, setDate] = useState("");
  const [lessonsList, setLessonsList] = useState([]);
  const arrNumPairs = [1, 2, 3, 4, 5, 6, 7, 8];
  const { group } = useAuth();
  useEffect(() => {
    StudentApi.getShedule(tomorrow, group).then((res) => {
      setLessonsList(res);
      const readDate = format(new Date(res[0].cur_date), "dd.MM.yyyy");
      setDate(readDate);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const showShedule = () => {
    return arrNumPairs.map((item) => {
      if (lessonsList.find((lesson) => Number(lesson.number_pair) === item)) {
        // eslint-disable-next-line array-callback-return
        return lessonsList.map((lesson) => {
          if (Number(lesson.number_pair) === item)
            return (
              <TableRow key={lesson.shedule_id} hover tabIndex={-1}>
                <TableCell sx={{ width: "100px" }} align="center">
                  {lesson.number_pair}
                </TableCell>
                <TableCell
                  sx={{
                    borderLeft: "1px solid #ccc",
                    align: "center",
                    justifyContent: "space-between",
                    display: "flex",
                  }}
                >
                  {lesson.discipline}
                  <Typography
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    {lesson.surname} {lesson.name} {lesson.father_name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    {lesson.number}
                  </Typography>
                </TableCell>
              </TableRow>
            );
        });
      } else {
        return (
          <TableRow key={item} hover tabIndex={-1}>
            <TableCell sx={{ width: "100px" }} align="center">
              {item}
            </TableCell>
            <TableCell
              sx={{
                borderLeft: "1px solid #ccc",
              }}
              align="center"
            ></TableCell>
          </TableRow>
        );
      }
    });
  };
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography>Расписание на {date}</Typography>
      <Paper sx={{ width: "700px", overflow: "hidden", mt: "50px" }}>
        <TableContainer sx={{ maxHeight: 600 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ width: "100px" }} align="center">
                  Номер пары
                </TableCell>
                <TableCell sx={{ borderLeft: "1px solid #ccc" }} align="center">
                  Название дисциплина
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{showShedule()}</TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>
  );
};

export default SheduleStudent;
