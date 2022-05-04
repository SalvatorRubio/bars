import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdminApi } from "../../../../../../ClassesApi/AdminApi";
const SelectDisciplines = ({ discipline, setDiscipline, group }) => {
  const [disciplinesArr, setDisciplinesArr] = useState([]);

  useEffect(() => {
    setDiscipline("");
    AdminApi.getDisciplines(group).then((res) => setDisciplinesArr(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите дисциплину
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Группа</InputLabel>
        <Select
          value={discipline}
          label="Группа"
          onChange={(e) => setDiscipline(e.target.value)}
        >
          {disciplinesArr.map((item) => {
            return (
              <MenuItem key={item.discipline_id} value={item.discipline_id}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectDisciplines;
