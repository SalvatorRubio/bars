import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useFormContext, Controller } from "react-hook-form";
import { AdminApi } from "../../../../../../ClassesApi/AdminApi";

const SelectSpeciality = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [specialitiesArr, setSpecialitiesArr] = useState([]);
  useEffect(() => {
    AdminApi.getSpeciality().then((res) => setSpecialitiesArr(res));
  }, []);

  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "5px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите специальность
      </Typography>
      <Controller
        control={control}
        name="speciality"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <FormControl fullWidth error={!!errors.speciality}>
            <InputLabel>Специальность</InputLabel>
            <Select value={value} label="Специальность" onChange={onChange}>
              {specialitiesArr.map((item) => {
                return (
                  <MenuItem key={item.spec_id} value={item.spec_id}>
                    {item.long_name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        )}
      />
    </Box>
  );
};

export default SelectSpeciality;
