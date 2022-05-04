import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { TeacherApi } from "../../../../ClassesApi/TeacherApi";
import { useAuth } from "../../../../hook/useAuth";

const SelectDiscipline = ({ discipline, setDiscipline }) => {
  const [disciplinesArr, setDisciplinesArr] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { id, group } = useAuth();

  useEffect(() => {
    TeacherApi.getDisciplines(id, group).then((res) => {
      setDisciplinesArr(res);
      setLoading(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group]);

  const handleChange = (e) => {
    sessionStorage.setItem("discipline", e.target.value);
    setDiscipline(e.target.value);
  };

  return (
    <Grid item xs={4}>
      <Typography sx={{ mb: 1 }}>Выберите дисциплину</Typography>
      <FormControl sx={{ width: "100%", maxWidth: "300px" }}>
        <InputLabel>Дисциплина</InputLabel>
        {isLoading && (
          <Select value={discipline} label="Дисциплина" onChange={handleChange}>
            {disciplinesArr.map((item) => {
              return (
                <MenuItem key={item.discipline_id} value={item.discipline_id}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
        )}
      </FormControl>
    </Grid>
  );
};

export default SelectDiscipline;
