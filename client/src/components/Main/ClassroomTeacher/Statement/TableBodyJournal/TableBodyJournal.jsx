import React, { useEffect, useReducer, useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ClassTeacher } from "../../../../../ClassesApi/ClassroomTeacher";
import TableBody from "@mui/material/TableBody";
const useStyles = makeStyles({
  tableCell: {
    textAlign: "center",
  },
});
function reducer(state, action) {
  switch (action.type) {
    case "addStudent":
      if (!state.find((el) => el.id === action.id)) {
        return [
          ...state,
          {
            id: action.id,
            surname: action.surname,
            fatherName: action.fatherName,
            name: action.name,
            disciplines: [],
          },
        ];
      }
      return state;

    case "clearArray":
      return (state = []);
    case "addDisciplines":
      return state.map((item) => {
        if (
          !item.disciplines.find((el) => el.discipline === action.discipline)
        ) {
          return {
            ...item,
            disciplines: [
              ...item.disciplines,
              { discipline: action.discipline, mark: "" },
            ],
          };
        }
        return item;
      });

    case "addMarks":
      return state.map((item) => {
        action.marks.map((el) => {
          if (item.id === el.student_id) {
            item.disciplines.map((discip) => {
              if (discip.discipline === el.name) return (discip.mark = el.mark);
              return discip;
            });
          }
          return el;
        });
        return item;
      });

    default:
      return state;
  }
}

const TableBodyJournal = ({ group, disciplines, dates }) => {
  const [state, dispatch] = useReducer(reducer, []);
  const classes = useStyles();

  useEffect(() => {
    dispatch({ type: "clearArray" });
    ClassTeacher.getStudents(group).then((res) => {
      res.map((item) => {
        return dispatch({
          type: "addStudent",
          name: item.name,
          surname: item.surname,
          fatherName: item.father_name,
          id: item.student_id,
        });
      });
    });
  }, [group]);

  useEffect(() => {
    disciplines.map((item) => {
      return dispatch({
        type: "addDisciplines",
        discipline: item.name,
      });
    });
  }, [disciplines]);

  useEffect(() => {
    state.map((item) => {
      return ClassTeacher.getMiddleMarks(item.id, dates[0], dates[1]).then(
        (res) => {
          dispatch({ type: "addMarks", marks: res });
        }
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group, disciplines, dates]);
  return (
    <TableBody>
      {state.map((item, i) => {
        return (
          <TableRow key={item.id}>
            <TableCell>
              {i + 1} {item.surname} {item.name} {item.fatherName}
            </TableCell>
            {disciplines.map((el) => {
              // eslint-disable-next-line array-callback-return
              return item.disciplines.map((it, index) => {
                if (it.discipline === el.name) {
                  return (
                    <TableCell key={index} className={classes.tableCell}>
                      {it.mark}
                    </TableCell>
                  );
                }
              });
            })}
          </TableRow>
        );
      })}

      <TableRow>
        <TableCell>Качество знаний</TableCell>
        <TableCell className={classes.tableCell}>50</TableCell>
        <TableCell className={classes.tableCell}>70</TableCell>
        <TableCell className={classes.tableCell}>65</TableCell>
        <TableCell className={classes.tableCell}>100</TableCell>
        <TableCell className={classes.tableCell}>45</TableCell>
        <TableCell className={classes.tableCell}>80</TableCell>
        <TableCell className={classes.tableCell}>90</TableCell>
        <TableCell className={classes.tableCell}>95</TableCell>
        <TableCell className={classes.tableCell}>65</TableCell>
        <TableCell className={classes.tableCell}>44</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Абсолютная успеваемость</TableCell>
        <TableCell className={classes.tableCell}>50</TableCell>
        <TableCell className={classes.tableCell}>70</TableCell>
        <TableCell className={classes.tableCell}>65</TableCell>
        <TableCell className={classes.tableCell}>100</TableCell>
        <TableCell className={classes.tableCell}>45</TableCell>
        <TableCell className={classes.tableCell}>80</TableCell>
        <TableCell className={classes.tableCell}>90</TableCell>
        <TableCell className={classes.tableCell}>95</TableCell>
        <TableCell className={classes.tableCell}>65</TableCell>
        <TableCell className={classes.tableCell}>44</TableCell>
      </TableRow>
    </TableBody>
  );
};

export default TableBodyJournal;
