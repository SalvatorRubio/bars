import React from "react";
import { Box, Button } from "@mui/material";
import { useAuth } from "../../../../../../../hook/useAuth";
import { TeacherApi } from "../../../../../../../ClassesApi/TeacherApi";

const ModalButton = ({
  valueTextarea,
  lessonType,
  date,
  shedule,
  setOpen,
  setValueTextarea,
  setLessonType,
}) => {
  const { id, group } = useAuth();

  const updateTopic = () => {
    TeacherApi.updateTopic(
      date,
      shedule,
      id,
      group,
      valueTextarea,
      lessonType
    ).then(() => {
      setOpen(false);
      setLessonType("");
      setValueTextarea("");
    });
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        mt: "20px",
      }}
    >
      <Button onClick={updateTopic} variant="contained" sx={{ width: "246px" }}>
        Задать тему и тип урока
      </Button>
    </Box>
  );
};

export default ModalButton;
