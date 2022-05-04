import { Box, Typography, Button } from "@mui/material";
import SelectGroup from "../SelectGroup/SelectGroup";
import React, { useState } from "react";
import SelectTeacher from "./SelectTeacher/SelectTeacher";
import SemesterInput from "./SemesterInput/SemesterInput";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";

const EditGroup = () => {
  const [group, setGroup] = useState("");
  const [teacher, setTeacher] = useState("");
  const [startSem, setStartSem] = useState("");
  const [endSem, setEndSem] = useState("");
  const [number, setNumber] = useState("");
  const [course, setCourse] = useState("");

  const handleClick = () => {
    AdminApi.updateGroup(teacher, group, startSem, endSem, number, course).then(
      () => {
        setGroup("");
        setTeacher("");
        setStartSem("");
        setEndSem("");
        setNumber("");
        setCourse("");
      }
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h6"
        sx={{ width: "100%", mb: 2, textAlign: "center" }}
      >
        Изменение группы
      </Typography>
      <SelectGroup group={group} setGroup={setGroup} />
      <SelectTeacher teacher={teacher} setTeacher={setTeacher} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          m: "5px 0",
        }}
      >
        <SemesterInput
          label="Семестр"
          width="250px"
          textAlign="left"
          text="Начало семестра"
          value={startSem}
          setValue={setStartSem}
        />
        <SemesterInput
          label="Семестр"
          width="200px"
          textAlign="center"
          text="Конец семестра"
          value={endSem}
          setValue={setEndSem}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          m: "5px 0",
        }}
      >
        <SemesterInput
          label="Номер группы"
          width="250px"
          textAlign="left"
          text="Номер группы"
          value={number}
          setValue={setNumber}
        />
        <SemesterInput
          label="Курс"
          width="200px"
          textAlign="center"
          text="Курс"
          value={course}
          setValue={setCourse}
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
          Изменить группу
        </Button>
      </Box>
    </Box>
  );
};

export default EditGroup;
