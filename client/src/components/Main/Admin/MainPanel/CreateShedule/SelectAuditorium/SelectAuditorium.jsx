import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText, Typography } from "@mui/material";
import { AdminApi } from "../../../../../../ClassesApi/AdminApi";
import { Controller, useFormContext } from "react-hook-form";

const SelectAuditorium = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [auditoriumsArr, setAuditoriumsArr] = useState([]);
  useEffect(() => {
    AdminApi.getAuditorium().then((res) => setAuditoriumsArr(res));
  }, []);
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "5px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите аудиторию
      </Typography>
      <Controller
        rules={{ required: true }}
        name="auditorium"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl fullWidth error={!!errors.auditorium}>
            <InputLabel>Аудитория</InputLabel>
            <Select value={value} label="Аудитория" onChange={onChange}>
              {auditoriumsArr.map((item) => {
                return (
                  <MenuItem key={item.id_auditorium} value={item.id_auditorium}>
                    {item.number}
                  </MenuItem>
                );
              })}
            </Select>
            {errors.auditorium && (
              <FormHelperText>Выберите аудиторию</FormHelperText>
            )}
          </FormControl>
        )}
      />
    </Box>
  );
};

export default SelectAuditorium;
