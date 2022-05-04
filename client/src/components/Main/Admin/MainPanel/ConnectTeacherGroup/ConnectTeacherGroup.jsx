import { Box } from "@mui/material";
import { Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import InputForm from "./InputForm/InputForm";
import SelectDisciplines from "./SelectDisciplines/SelectDisciplines";
import SelectGroup from "./SelectGroup/SelectGroup";
import SelectTeacher from "./SelectTeacher/SelectTeacher";

const ConnectTeacherGroup = () => {
  const [group, setGroup] = useState("");
  const [teacher, setTeacher] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [course, setCourse] = useState("");
  const [isCorrect, setCorrect] = useState(false);
  const [semester, setSemester] = useState("");

  const handleClick = () => {
    AdminApi.insertTeachGroupDiscip(
      teacher,
      group,
      discipline,
      course,
      semester
    ).then(() => {
      setCorrect(true);
      setTimeout(() => {
        setCorrect(false);
      }, 3000);
      setGroup("");
      setTeacher("");
      setDiscipline("");
      setSemester("");
    });
  };
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ width: "100%", mb: 2, textAlign: "center" }}
      >
        Привязка учителя к группе
      </Typography>
      <SelectGroup setGroup={setGroup} setCourse={setCourse} group={group} />
      <SelectTeacher setTeacher={setTeacher} teacher={teacher} />
      <SelectDisciplines
        discipline={discipline}
        setDiscipline={setDiscipline}
        group={group}
      />
      <InputForm
        label="Семестр"
        text="семестр"
        value={semester}
        setValue={setSemester}
      />
      <Typography
        sx={{
          height: "20px",
          width: "100%",
          textAlign: "center",
          color: "#028A0F",
        }}
      >
        {isCorrect ? "Учитель добавлен к группе" : ""}
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button onClick={handleClick} variant="contained">
          Соеденить
        </Button>
      </Box>
    </Box>
  );
};

export default ConnectTeacherGroup;
