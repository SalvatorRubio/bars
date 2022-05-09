/* eslint-disable array-callback-return */
import React, { useEffect, useReducer } from "react";
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

    case "addInfo":
      state.map((item) => {
        item.disciplines = [];
        return item;
      });
      const stateArr = [...state];
      const marksArr = [...action.marks];
      stateArr.map((item) => {
        marksArr.map((mark) => {
          if (item.id === mark.student_id) {
            item.disciplines.push(mark);
          }
          return mark;
        });
        return item;
      });
      return (state = [...stateArr]);

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
    ClassTeacher.getСalculatedInfo(dates[0], dates[1], group).then((res) => {
      dispatch({ type: "addInfo", marks: res });
    });
  }, [group, disciplines, dates]);

  return (
    <TableBody>
      {state.map((item, i) => {
        return (
          <TableRow
            sx={{
              background: i % 2 !== 0 ? "rgba(240, 240, 240, 0.5)" : "#fff",
            }}
            key={item.id}
          >
            <TableCell>
              {i + 1} {item.surname} {item.name} {item.fatherName}
            </TableCell>
            {disciplines.map((el, idx) => {
              if (item.disciplines.find((it) => it.name === el.name)) {
                return item.disciplines.map((it, index) => {
                  if (it.name === el.name) {
                    return (
                      <TableCell key={index} className={classes.tableCell}>
                        "н" - {it.missing} / "2" - {it.deuces}
                      </TableCell>
                    );
                  }
                });
              } else {
                return (
                  <TableCell
                    key={idx}
                    className={classes.tableCell}
                  ></TableCell>
                );
              }
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default TableBodyJournal;
