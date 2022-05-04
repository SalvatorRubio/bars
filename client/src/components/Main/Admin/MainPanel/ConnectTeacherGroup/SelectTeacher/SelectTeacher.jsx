import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdminApi } from "../../../../../../ClassesApi/AdminApi";

const SelectTeacher = ({ teacher, setTeacher }) => {
  const [teachersArr, setTeachersArr] = useState([]);

  useEffect(() => {
    AdminApi.getTeachers().then((res) => setTeachersArr(res));
  }, []);

  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите преподавателя
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Преподаватель</InputLabel>
        <Select
          value={teacher}
          label="Преподаватель"
          onChange={(e) => setTeacher(e.target.value)}
        >
          {teachersArr.map((item) => {
            return (
              <MenuItem key={item.teacher_id} value={item.teacher_id}>
                {item.surname} {item.name} {item.father_name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectTeacher;
