import React, { useState } from "react";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";

import TableRow from "@mui/material/TableRow";

const AcademicTableBody = ({ disciplines, setDisciplines }) => {
  const [itemIdToEdit, setItemIdToEdit] = useState();
  const [isEdit, setEdit] = useState(false);
  const handleClick = (item) => {
    setItemIdToEdit(item);
    setEdit(true);
  };

  const handleChange = (e, itemChange, index) => {
    setDisciplines(
      disciplines.map((item) => {
        if (item.id === index) {
          item[itemChange] = e.target.value;
        }
        return item;
      })
    );
  };

  return (
    <TableBody>
      {disciplines.map((item, i) => {
        if (isEdit && itemIdToEdit === i) {
          return (
            <TableRow key={i}>
              <TableCell>
                <TextField
                  sx={{ width: "100px" }}
                  value={item.name}
                  onChange={(e) => handleChange(e, "name", i)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  sx={{ width: "100px" }}
                  value={item.hours ? item.hours : ""}
                  type="number"
                  InputProps={{ inputProps: { min: 0, max: 150 } }}
                  onChange={(e) => handleChange(e, "hours", i)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  sx={{ width: "100px" }}
                  value={item.lections ? item.lections : ""}
                  type="number"
                  InputProps={{ inputProps: { min: 0, max: 150 } }}
                  onChange={(e) => handleChange(e, "lections", i)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  sx={{ width: "100px" }}
                  value={item.practice ? item.practice : ""}
                  type="number"
                  InputProps={{ inputProps: { min: 0, max: 150 } }}
                  onChange={(e) => handleChange(e, "practice", i)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  sx={{ width: "100px" }}
                  value={item.labWork ? item.labWork : ""}
                  type="number"
                  InputProps={{ inputProps: { min: 0, max: 150 } }}
                  onChange={(e) => handleChange(e, "labWork", i)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  sx={{ width: "100px" }}
                  value={item.homework ? item.homework : ""}
                  type="number"
                  InputProps={{ inputProps: { min: 0, max: 150 } }}
                  onChange={(e) => handleChange(e, "homework", i)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  sx={{ width: "100px" }}
                  value={item.courseWork ? item.courseWork : ""}
                  type="number"
                  InputProps={{ inputProps: { min: 0, max: 150 } }}
                  onChange={(e) => handleChange(e, "courseWork", i)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  sx={{ width: "100px" }}
                  value={item.offset ? item.offset : ""}
                  type="number"
                  InputProps={{ inputProps: { min: 0, max: 150 } }}
                  onChange={(e) => handleChange(e, "offset", i)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  sx={{ width: "100px" }}
                  value={item.exam ? item.exam : ""}
                  type="number"
                  InputProps={{ inputProps: { min: 0, max: 150 } }}
                  onChange={(e) => handleChange(e, "exam", i)}
                />
              </TableCell>
            </TableRow>
          );
        } else {
          return (
            <TableRow onClick={() => handleClick(i)} key={i}>
              <TableCell align="center">{item.name}</TableCell>
              <TableCell align="center">{item.hours}</TableCell>
              <TableCell align="center">{item.lections}</TableCell>
              <TableCell align="center">{item.practice}</TableCell>
              <TableCell align="center">{item.labWork}</TableCell>
              <TableCell align="center">{item.homework}</TableCell>
              <TableCell align="center">{item.courseWork}</TableCell>
              <TableCell align="center">{item.offset}</TableCell>
              <TableCell align="center">{item.exam}</TableCell>
            </TableRow>
          );
        }
      })}
    </TableBody>
  );
};

export default AcademicTableBody;
