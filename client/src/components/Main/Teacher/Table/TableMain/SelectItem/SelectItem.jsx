import { FormControl, MenuItem, Select, TableCell } from "@mui/material";
import React from "react";
import { TeacherApi } from "../../../../../../ClassesApi/TeacherApi";

const SelectItem = ({ setIsEdit, student, shedule, setValue, value }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
    setIsEdit(false);
    TeacherApi.updateMark(student, shedule, e.target.value);
  };

  return (
    <TableCell sx={{ cursor: "pointer", padding: 0 }} align="center">
      <FormControl sx={{ width: "100px", height: "30px" }}>
        <Select sx={{ height: "30px" }} value={value} onChange={handleChange}>
          <MenuItem sx={{ height: "30px" }} value="0"></MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="н">н</MenuItem>
          <MenuItem value="Нб">Нб</MenuItem>
        </Select>
      </FormControl>
    </TableCell>
  );
};

export default SelectItem;
