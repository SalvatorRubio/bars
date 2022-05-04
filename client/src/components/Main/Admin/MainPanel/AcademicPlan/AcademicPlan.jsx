import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";

import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import AcademicPlanTable from "./AcademicPlanTable/AcademicPlanTable";

import SelectSpeciality from "./SelectSpeciality/SelectSpeciality";

const AcademicPlan = () => {
  const obj = {
    name: "",
    hours: 0,
    lections: 0,
    practice: 0,
    labWork: 0,
    exam: 0,
    offset: 0,
    homework: 0,
    courseWork: 0,
  };
  const [value, setValue] = useState();
  const [disciplines, setDisciplines] = useState([]);
  const [speciality, setSpeciality] = useState("");

  const handleChange = (e) => {
    const arr = new Array(Number(e.target.value));
    arr.fill(obj, 0, arr.length);
    const result = arr.map((item, i) => {
      let id = { id: i };
      return (item = { ...id, ...item });
    });
    setDisciplines(result);
  };

  const handleClick = () => {
    AdminApi.insertAcademicPlan(value, speciality, disciplines);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        variant="h6"
        sx={{ width: "100%", mb: 2, textAlign: "center" }}
      >
        Создание учебного плана
      </Typography>
      <Box sx={{ mb: 2, display: "flex" }}>
        <TextField
          sx={{ width: "200px", m: "0 50px" }}
          label="Начало семестра"
          variant="outlined"
          type="number"
          InputProps={{ inputProps: { min: 0, max: 15 } }}
          onChange={(e) => setValue(e.target.value)}
        />

        <TextField
          sx={{ width: "200px", m: "0 50px" }}
          label="Кол. дисциплин"
          variant="outlined"
          InputProps={{ inputProps: { min: 0, max: 50 } }}
          type="number"
          onChange={handleChange}
        />
      </Box>
      <SelectSpeciality speciality={speciality} setSpeciality={setSpeciality} />
      {disciplines.length > 0 && (
        <AcademicPlanTable
          value={value}
          disciplines={disciplines}
          setDisciplines={setDisciplines}
        />
      )}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mt: "20px",
        }}
      >
        <Button onClick={handleClick} variant="contained">
          Задать учебный план
        </Button>
      </Box>
    </Box>
  );
};

export default AcademicPlan;
