import React, { useEffect, useState } from "react";
import { Box, Typography, Autocomplete, TextField } from "@mui/material";
import { AdminApi } from "../../../../../../ClassesApi/AdminApi";

const Auditorium = ({ setAuditorium }) => {
  const [auditoriumsArr, setAuditoriumsArr] = useState([]);
  const [isCorrect, setCorrect] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    if (e !== "" && auditoriumsArr.includes(e)) {
      setCorrect(false);
      setAuditorium(e.id_auditorium);
      setValue(e);
    } else {
      setCorrect(true);
      setValue(e);
    }
  };

  useEffect(() => {
    AdminApi.getAuditorium().then((res) => setAuditoriumsArr(res));
  }, []);

  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите аудиторию
      </Typography>

      <Autocomplete
        id="combo-box-demo"
        options={auditoriumsArr}
        onChange={(event, newValue) => {
          handleChange(newValue);
        }}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        value={value}
        getOptionLabel={(option) => (option.number ? option.number : "")}
        fullWidth
        renderInput={(params) =>
          isCorrect ? (
            <TextField {...params} error label="Аудитория" />
          ) : (
            <TextField {...params} label="Аудитория" />
          )
        }
      />
    </Box>
  );
};

export default Auditorium;
