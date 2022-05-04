import React, { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { StudentApi } from "../../../../../ClassesApi/StudentApi";
const TableHeaderStudent = ({ dates }) => {
  const [arrDates, setArrDates] = useState([]);
  useEffect(() => {
    StudentApi.getDates(dates[0], dates[1]).then((res) => {
      setArrDates(res);
    });
  }, [dates]);
  return (
    <TableHead>
      <TableRow>
        <TableCell>Дисциплина</TableCell>
        {arrDates.map((date) => {
          return (
            <TableCell key={date.id} align="center">
              {date.cur_date}
            </TableCell>
          );
        })}

        <TableCell sx={{ borderLeft: "1px solid #ccc" }} align="center">
          Аттестация
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeaderStudent;
