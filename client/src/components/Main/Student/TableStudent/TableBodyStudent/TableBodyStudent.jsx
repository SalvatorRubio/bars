/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useAuth } from "../../../../../hook/useAuth";
import { StudentApi } from "../../../../../ClassesApi/StudentApi";
const TableBodyStudent = ({ dates }) => {
  const { group, id } = useAuth();
  const [disciplines, setDisciplines] = useState([]);
  const [arrDates, setArrDates] = useState([]);
  const [marks, setMarks] = useState([]);
  const [middleMarks, setMiddleMarks] = useState([]);

  useEffect(() => {
    StudentApi.getDisciplines(group).then((res) => {
      setDisciplines(res);
    });
  }, []);
  useEffect(() => {
    StudentApi.getDates(dates[0], dates[1]).then((res) => setArrDates(res));
  }, [dates]);

  useEffect(() => {
    const arr = [];
    disciplines.map((discipline) => {
      return StudentApi.getMarks(
        id,
        dates[0],
        dates[1],
        discipline.discipline_id
      ).then((itemMark) => {
        arr.push({ name: discipline.name, mark: itemMark });
        arr.reduce((el, i) => {
          if (!el.find((it) => it.name === i.name)) {
            el.push(i);
          }
          return el;
        }, []);

        setMarks([...arr]);
      });
    });
  }, [disciplines, dates]);

  useEffect(() => {
    StudentApi.getMiddleMarks(id, dates[0], dates[1]).then((res) =>
      setMiddleMarks(res)
    );
  }, [disciplines, dates]);

  return (
    <TableBody>
      {marks.map((item, i) => {
        return (
          <TableRow key={i} hover tabIndex={-1}>
            <TableCell>{item.name}</TableCell>
            {arrDates.map((date) => {
              if (item.mark.find((el) => el.cur_date === date.cur_date)) {
                return item.mark.map((el) => {
                  if (el.cur_date === date.cur_date) {
                    return (
                      <TableCell key={date.id}>
                        {el.mark
                          .split(",")
                          .map((it) => {
                            return Number(it) !== 0 ? it : "";
                          })
                          .join(",")
                          .replace(/,\s*$/, "")}
                      </TableCell>
                    );
                  }
                });
              } else {
                return <TableCell key={date.id}></TableCell>;
              }
            })}
            {middleMarks.map((el) => {
              if (el.name === item.name) {
                return (
                  <TableCell key={el.name}>
                    {Number(el.mark) !== 0 ? Number(el.mark).toFixed(2) : 2}
                  </TableCell>
                );
              }
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default TableBodyStudent;
