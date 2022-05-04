import React, { useEffect, useState } from "react";
import { AdminApi } from "../../../../../../ClassesApi/AdminApi";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectSpeciality = ({ speciality, setSpeciality }) => {
  const [specialitiesArr, setSpecialitiesArr] = useState([]);
  useEffect(() => {
    AdminApi.getSpeciality().then((res) => setSpecialitiesArr(res));
  }, []);

  return (
    <FormControl sx={{ width: "500px", mb: 2 }}>
      <InputLabel>Специальность</InputLabel>
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
  );
};

export default SelectSpeciality;
