import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import FormInput from "./FormInput/FormInput";
import HoursInput from "./HoursInput/HoursInput";
import SelectSpeciality from "./SelectSpeciality/SelectSpeciality";

const CreateDiscipline = () => {
  const [discipline, setDiscipline] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [hours, setHours] = useState("");
  const [semester, setSemester] = useState("");
  const [practice, setPractice] = useState("");
  const [lections, setLections] = useState("");
  const [labWorks, setLabWorks] = useState("");
  const [courseWork, setCourseWork] = useState("");
  const [offset, setOffset] = useState("");
  const [exam, setExam] = useState("");
  const [homework, setHomework] = useState("");

  const handleClick = () => {
    AdminApi.insertDiscipline(
      discipline,
      speciality,
      hours,
      semester,
      practice,
      lections,
      labWorks,
      courseWork,
      offset,
      exam,
      homework
    ).then(() => {
      setExam("");
      setHomework("");
      setDiscipline("");
      setSpeciality("");
      setHours("");
      setSemester("");
      setPractice("");
      setLections("");
      setLabWorks("");
      setCourseWork("");
      setOffset("");
    });
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h6"
        sx={{ width: "100%", mb: 2, textAlign: "center" }}
      >
        Создание дисциплины
      </Typography>
      <FormInput
        setValue={setDiscipline}
        value={discipline}
        type="text"
        text="дисциплину"
        label="Дисциплина"
      />
      <SelectSpeciality speciality={speciality} setSpeciality={setSpeciality} />
      <FormInput
        setValue={setHours}
        value={hours}
        type="number"
        text="общее количество часов"
        label="Часы"
      />
      <FormInput
        setValue={setSemester}
        value={semester}
        type="number"
        text="семестр"
        label="Семестр"
      />

      <Typography
        sx={{
          width: "100%",
          borderTop: "1px solid #ccc",
          margin: "10px 0 20px 0",
          pt: "10px",
        }}
        variant="h6"
      >
        Распределение часов по типам уроков
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          m: "5px 0",
        }}
      >
        <HoursInput
          text="Практические работы"
          value={practice}
          setValue={setPractice}
        />
        <HoursInput text="Лекции" value={lections} setValue={setLections} />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          m: "5px 0",
        }}
      >
        <HoursInput
          text="Лабораторные работы"
          value={labWorks}
          setValue={setLabWorks}
        />
        <HoursInput
          text="Курсовые работы"
          value={courseWork}
          setValue={setCourseWork}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          m: "5px 0",
        }}
      >
        <HoursInput text="Зачет" value={offset} setValue={setOffset} />
        <HoursInput text="Экзамен" value={exam} setValue={setExam} />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          m: "5px 0",
        }}
      >
        <HoursInput
          text="Самостоятельные работы"
          value={homework}
          setValue={setHomework}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mt: "20px",
        }}
      >
        <Button onClick={handleClick} variant="contained">
          Создать дисциплину
        </Button>
      </Box>
    </Box>
  );
};

export default CreateDiscipline;
