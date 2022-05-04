import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdminApi } from "../../../../../../ClassesApi/AdminApi";

const SelectStudents = ({ student, setStudent, group }) => {
  const [studentsArr, setStudentsArr] = useState([]);

  useEffect(() => {
    AdminApi.getStudents(group).then((res) => setStudentsArr(res));
  }, [group]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите студента
      </Typography>
      <FormControl fullWidth>
        <InputLabel>Студент</InputLabel>
        <Select
          value={student}
          label="Студент"
          onChange={(e) => {
            setStudent(e.target.value);
          }}
        >
          {studentsArr.map((item) => {
            return (
              <MenuItem key={item.student_id} value={item.student_id}>
                {item.surname} {item.name} {item.father_name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectStudents;
