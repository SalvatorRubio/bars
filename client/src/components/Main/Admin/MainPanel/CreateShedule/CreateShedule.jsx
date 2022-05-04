import { Box, Typography, Button } from "@mui/material";

import React, { useState, useEffect } from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import Auditorium from "./Auditorium/Auditorium";
import DatepickerShedule from "./DatepickerShedule/DatepickerShedule";
import Discipline from "./Discipline/Discipline";
import GroupView from "./GroupView/GroupView";
import Pair from "./Pair/Pair";
import SelectAuditorium from "./SelectAuditorium/SelectAuditorium";
import SelectDisciplines from "./SelectDisciplines/SelectDisciplines";
import SelectGroup from "./SelectGroup/SelectGroup";
import TypeLesson from "./TypeLesson/TypeLesson";

const CreateShedule = () => {
  const now = new Date();
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  const [date, setDate] = useState(tomorrow);
  const [pair, setPair] = useState("");
  const [group, setGroup] = useState("");
  const [groupView, setGroupView] = useState("Вся группа");
  const [discipline, setDiscipline] = useState("");
  const [auditorium, setAuditorium] = useState("");
  const [typeLesson, setTypeLesson] = useState("Теоретическая работа");
  const [teachGroupDisc, setTeachGroupDisc] = useState(null);
  const [isError, setError] = useState(false);

  useEffect(() => {
    AdminApi.getTeachGroupDiscipline(group, discipline).then((res) =>
      setTeachGroupDisc(res)
    );
  }, [group, discipline]);

  const createShedule = () => {
    AdminApi.insertShedule(
      date,
      pair,
      auditorium,
      groupView,
      typeLesson,
      teachGroupDisc.teach_group_disc_id
    ).then((res) => {
      console.log(res);
      if (res[0] === "ERROR") {
        return setError(true);
      }
      setError(false);
      setPair("");
      setDiscipline("");
      setAuditorium("");
    });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h6"
        sx={{ width: "100%", mb: 2, textAlign: "center" }}
      >
        Создание расписания на день
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          m: "10px 0",
        }}
      >
        <DatepickerShedule date={date} setDate={setDate} />
        <Pair setPair={setPair} />
      </Box>

      <SelectGroup group={group} setGroup={setGroup} />
      <SelectDisciplines
        group={group}
        discipline={discipline}
        setDiscipline={setDiscipline}
      />
      <GroupView groupView={groupView} setGroupView={setGroupView} />
      <TypeLesson typeLesson={typeLesson} setTypeLesson={setTypeLesson} />

      <SelectAuditorium value={auditorium} setValue={setAuditorium} />
      {isError && (
        <Typography
          variant="h6"
          sx={{ width: "100%", m: 2, textAlign: "center" }}
        >
          Часы по данному предмету закончились
        </Typography>
      )}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mt: "20px",
        }}
      >
        <Button onClick={createShedule} variant="contained">
          Создать урок
        </Button>
      </Box>
    </Box>
  );
};

export default CreateShedule;
