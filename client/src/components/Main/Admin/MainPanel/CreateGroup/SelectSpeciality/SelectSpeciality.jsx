import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { AdminApi } from "../../../../../../ClassesApi/AdminApi";

const SelectSpeciality = ({ speciality, setSpeciality }) => {
  const [specialitiesArr, setSpecialitiesArr] = useState([]);
  useEffect(() => {
    AdminApi.getSpeciality().then((res) => setSpecialitiesArr(res));
  }, []);

  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите специальность
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Специальность</InputLabel>
        <Select
          value={speciality}
          label="Специальность"
          onChange={(e) => setSpeciality(e.target.value)}
        >
          {specialitiesArr.map((item) => {
            return (
              <MenuItem key={item.spec_id} value={item.spec_id}>
                {item.long_name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectSpeciality;
