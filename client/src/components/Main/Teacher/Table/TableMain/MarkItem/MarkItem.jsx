/* eslint-disable eqeqeq */
import React from "react";
import { TableCell } from "@mui/material";

const MarkItem = ({ itemMark, i, student, handleChange }) => {
  return (
    <TableCell
      id={`student_${student}${i}`}
      sx={{ cursor: "pointer" }}
      align="center"
      onDoubleClick={(e) => handleChange(e, itemMark)}
    >
      {itemMark != 0 ? itemMark : ""}
    </TableCell>
  );
};

export default MarkItem;
