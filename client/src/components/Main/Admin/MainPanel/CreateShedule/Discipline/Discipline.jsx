import React, { useEffect, useState } from "react";
import { Box, Typography, Autocomplete, TextField } from "@mui/material";
import { AdminApi } from "../../../../../../ClassesApi/AdminApi";

const Discipline = ({ setDiscipline, group }) => {
  const [disciplinesArr, setDisciplinesArr] = useState([]);
  const [isCorrect, setCorrect] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    if (e !== "" && disciplinesArr.includes(e)) {
      setCorrect(false);
      setDiscipline(e.discipline_id);
      setValue(e);
    } else {
      setCorrect(true);
      setValue(e);
    }
  };

  useEffect(() => {
    setDiscipline("");
    setDisciplinesArr([]);
    setValue("");
    AdminApi.getDisciplines(group).then((res) => setDisciplinesArr(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите дисциплину
      </Typography>
      <Autocomplete
        id="combo-box-demo"
        options={disciplinesArr}
        onChange={(event, newValue) => {
          handleChange(newValue);
        }}
        value={value}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        getOptionLabel={(option) => (option.name ? option.name : "")}
        fullWidth
        renderInput={(params) =>
          isCorrect ? (
            <TextField {...params} error label="Дисциплина" />
          ) : (
            <TextField {...params} label="Дисциплина" />
          )
        }
      />
    </Box>
  );
};

export default Discipline;
