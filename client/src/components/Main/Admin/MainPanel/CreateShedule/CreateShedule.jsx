import { Box, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import { useForm, FormProvider } from "react-hook-form";
import DatepickerShedule from "./DatepickerShedule/DatepickerShedule";
import GroupView from "./GroupView/GroupView";
import Pair from "./Pair/Pair";
import SelectAuditorium from "./SelectAuditorium/SelectAuditorium";
import SelectDisciplines from "./SelectDisciplines/SelectDisciplines";
import SelectGroup from "./SelectGroup/SelectGroup";
import TypeLesson from "./TypeLesson/TypeLesson";
const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
const CreateShedule = () => {
  const [teachGroupDisc, setTeachGroupDisc] = useState(null);
  const [error, setError] = useState(false);

  const methods = useForm({
    defaultValues: {
      date: tomorrow,
      pair: "",
      group: "",
      groupView: "Вся группа",
      discipline: "",
      auditorium: "",
      typeLesson: "Теоретическая работа",
    },
  });
  const { group, discipline } = methods.watch();
  useEffect(() => {
    AdminApi.getTeachGroupDiscipline(group, discipline).then((res) =>
      setTeachGroupDisc(res)
    );
  }, [group, discipline]);

  const createShedule = (data) => {
    if (!error) {
      const { date, pair, auditorium, groupView, typeLesson } = data;
      AdminApi.insertShedule(
        date,
        pair,
        auditorium,
        groupView,
        typeLesson,
        teachGroupDisc.teach_group_disc_id
      ).then(() => {
        setError(false);
        methods.setValue("discipline", "");
        methods.setValue("auditorium", "");
        methods.setValue("pair", "");
      });
    }
  };

  useEffect(() => {
    if (group && discipline)
      AdminApi.watchTheShedule(discipline, group).then((res) => {
        if (res.length === 0) {
          setError(true);
        } else {
          setError(false);
        }
      });
  }, [group, discipline]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(createShedule)}>
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
            <DatepickerShedule />
            <Pair />
          </Box>
          <SelectGroup />
          <SelectDisciplines group={group} />
          <GroupView />

          <TypeLesson />

          <SelectAuditorium />
          {error && (
            <Typography align="center" color="red" mt={2}>
              Количество часов по этому предмету у этой группы закончилось
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
            <Button type="submit" variant="contained">
              Создать урок
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};

export default CreateShedule;
