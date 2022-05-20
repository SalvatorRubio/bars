import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdminApi } from "../../../../../../ClassesApi/AdminApi";
const SelectDisciplines = ({ discipline, setDiscipline, speciality }) => {
  const [disciplinesArr, setDisciplinesArr] = useState([]);

  useEffect(() => {
    setDiscipline("");
    AdminApi.getDisciplinesSpeciality(speciality).then((res) => {
      setDisciplinesArr(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speciality]);
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите дисциплину
      </Typography>
      <FormControl fullWidth>
        <InputLabel>Дисциплина</InputLabel>
        <Select
          value={discipline}
          label="Дисциплина"
          onChange={(e) => setDiscipline(e.target.value)}
        >
          {disciplinesArr.map((item) => {
            return (
              <MenuItem key={item.discipline_id} value={item.discipline_id}>
                {item.name} - {item.semester} семестр
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectDisciplines;
