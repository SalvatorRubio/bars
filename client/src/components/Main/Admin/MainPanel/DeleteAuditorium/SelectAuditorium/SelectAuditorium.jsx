import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import { AdminApi } from "../../../../../../ClassesApi/AdminApi";

const SelectAuditorium = ({ value, setValue }) => {
  const [auditoriumsArr, setAuditoriumsArr] = useState([]);
  useEffect(() => {
    AdminApi.getAuditorium().then((res) => setAuditoriumsArr(res));
  }, []);
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "5px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите аудиторию
      </Typography>
      <FormControl fullWidth>
        <InputLabel>Аудитория</InputLabel>
        <Select
          value={value}
          label="Аудитория"
          onChange={(e) => setValue(e.target.value)}
        >
          {auditoriumsArr.map((item) => {
            return (
              <MenuItem key={item.id_auditorium} value={item.id_auditorium}>
                {item.number}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectAuditorium;
