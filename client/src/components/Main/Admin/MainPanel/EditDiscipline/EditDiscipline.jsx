import { Box, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import FormInput from "./FormInput/FormInput";
import HoursInput from "./HoursInput/HoursInput";
import SelectDisciplines from "./SelectDisciplines/SelectDisciplines";
import SelectSpeciality from "./SelectSpeciality/SelectSpeciality";

const EditDiscipline = () => {
  const [speciality, setSpeciality] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [allInfoDiscipline, setAllInfoDiscipline] = useState([]);
  useEffect(() => {
    AdminApi.getAllInfoDiscipline(discipline).then((res) =>
      setAllInfoDiscipline(res)
    );
  }, [discipline]);
  const handleClick = () => {
    AdminApi.updateDiscipline(allInfoDiscipline);
  };
  console.log(allInfoDiscipline);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h6"
        sx={{ width: "100%", mb: 2, textAlign: "center" }}
      >
        Измененить дисциплину
      </Typography>
      <SelectSpeciality speciality={speciality} setSpeciality={setSpeciality} />
      <SelectDisciplines
        setDiscipline={setDiscipline}
        discipline={discipline}
        speciality={speciality}
      />

      {allInfoDiscipline.map((item) => {
        return (
          <React.Fragment key={item}>
            <FormInput
              label="Дисциплина"
              value={item.name}
              valueKey="name"
              arr={allInfoDiscipline}
              setValue={setAllInfoDiscipline}
              text="название дисциплины"
              type="text"
            />
            <FormInput
              label="Часы"
              value={item.hours}
              valueKey="hours"
              arr={allInfoDiscipline}
              setValue={setAllInfoDiscipline}
              text="часы"
              type="number"
            />
            <FormInput
              label="Семестр"
              value={item.semester}
              valueKey="semester"
              arr={allInfoDiscipline}
              setValue={setAllInfoDiscipline}
              text="семестр"
              type="number"
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
                value={item.practice}
                valueKey="practice"
                arr={allInfoDiscipline}
                setValue={setAllInfoDiscipline}
              />
              <HoursInput
                text="Лекции"
                value={item.lections}
                valueKey="lections"
                arr={allInfoDiscipline}
                setValue={setAllInfoDiscipline}
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
              <HoursInput
                text="Лабораторные работы"
                value={item.lab_works}
                valueKey="lab_works"
                arr={allInfoDiscipline}
                setValue={setAllInfoDiscipline}
              />
              <HoursInput
                text="Курсовые работы"
                value={item.courseWork}
                valueKey="labWorks"
                arr={allInfoDiscipline}
                setValue={setAllInfoDiscipline}
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
              <HoursInput
                text="Зачет"
                value={item.offset}
                valueKey="offset"
                arr={allInfoDiscipline}
                setValue={setAllInfoDiscipline}
              />
              <HoursInput
                text="Экзамен"
                value={item.exam}
                valueKey="exam"
                arr={allInfoDiscipline}
                setValue={setAllInfoDiscipline}
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
              <HoursInput
                text="Самостоятельные работы"
                value={item.homework}
                valueKey="homework"
                arr={allInfoDiscipline}
                setValue={setAllInfoDiscipline}
              />
            </Box>
          </React.Fragment>
        );
      })}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mt: "20px",
        }}
      >
        <Button onClick={handleClick} variant="contained">
          Изменить учителя
        </Button>
      </Box>
    </Box>
  );
};

export default EditDiscipline;
