import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdminApi } from "../../../../../../ClassesApi/AdminApi";
import { useFormContext, Controller } from "react-hook-form";

const SelectGroup = () => {
  const [groupsArr, setGroupsArr] = useState([]);
  const {
    control,
    formState: { errors },
  } = useFormContext();
  useEffect(() => {
    AdminApi.getGroups().then((res) => setGroupsArr(res));
  }, []);

  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите группу
      </Typography>
      <Controller
        control={control}
        name="group"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <FormControl fullWidth error={!!errors.group}>
            <InputLabel>Группа</InputLabel>
            <Select value={value} label="Группа" onChange={onChange}>
              {groupsArr.map((item) => {
                return (
                  <MenuItem key={item.groups_id} value={item.groups_id}>
                    {item.course}
                    {item.name}
                    {item.number}
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

export default SelectGroup;
