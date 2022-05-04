import React from "react";

import TableCell from "@mui/material/TableCell";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const TableHeader = ({ value }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell colSpan={9} align="center">
          {value} семестр
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="center">Дисциплина</TableCell>
        <TableCell align="center">Часы</TableCell>
        <TableCell align="center">Лекции</TableCell>
        <TableCell align="center">Практика</TableCell>
        <TableCell align="center">Лаб.раб</TableCell>
        <TableCell align="center">Сам.раб</TableCell>
        <TableCell align="center">Курсовая</TableCell>
        <TableCell align="center">Зачет</TableCell>
        <TableCell align="center">Экзамен</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
