import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdminApi } from "../../../../../../ClassesApi/AdminApi";
import { useFormContext, Controller } from "react-hook-form";

const SelectClassroomTeacher = () => {
  const [teachersArr, setTeachersArr] = useState([]);
  const {
    control,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    AdminApi.getTeachers().then((res) => setTeachersArr(res));
  }, []);

  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите учителя
      </Typography>
      <Controller
        control={control}
        name="teacher"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <FormControl fullWidth error={!!errors.teacher}>
            <InputLabel id="demo-simple-select-label">Преподаватель</InputLabel>
            <Select value={value} label="Преподаватель" onChange={onChange}>
              {
                // eslint-disable-next-line array-callback-return
                teachersArr.map((item) => {
                  if (Number(item.type) === 1) {
                    return (
                      <MenuItem key={item.teacher_id} value={item.teacher_id}>
                        {item.surname} {item.name} {item.father_name}
                      </MenuItem>
                    );
                  }
                })
              }
            </Select>
          </FormControl>
        )}
      />
    </Box>
  );
};

export default SelectClassroomTeacher;
