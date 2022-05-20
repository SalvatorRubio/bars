import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import { Controller, useFormContext } from "react-hook-form";
import { AdminApi } from "../../../../../../ClassesApi/AdminApi";
const SelectDisciplines = ({ group }) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [disciplinesArr, setDisciplinesArr] = useState([]);

  useEffect(() => {
    setValue("discipline", "");
    AdminApi.getDisciplines(group).then((res) => setDisciplinesArr(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите дисциплину
      </Typography>
      <Controller
        rules={{ required: true }}
        name="discipline"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl fullWidth error={!!errors.discipline}>
            <InputLabel>Дисциплина</InputLabel>
            <Select value={value} label="Дисциплина" onChange={onChange}>
              {disciplinesArr.map((item) => {
                return (
                  <MenuItem key={item.discipline_id} value={item.discipline_id}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
            {errors.discipline && (
              <FormHelperText>Выберите дисциплину</FormHelperText>
            )}
          </FormControl>
        )}
      />
    </Box>
  );
};

export default SelectDisciplines;
