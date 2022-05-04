import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import ModalSelectLessonType from "./ModalSelectLessonType/ModalSelectLessonType";
import { Box, Typography } from "@mui/material";
import ModalButton from "./ModalButton/ModalButton";
import ModalTextarea from "./ModalTextarea/ModalTextarea";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ModalTypeLesson = ({ open, setOpen, shedule, columnsDate, date }) => {
  const [lessonType, setLessonType] = useState("");
  const [valueTextarea, setValueTextarea] = useState("");
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setLessonType(e.target.value);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography variant="h6" color="initial">
            Выбранная дата {date}
          </Typography>

          <ModalSelectLessonType
            handleChange={handleChange}
            lessonType={lessonType}
          />

          <ModalTextarea
            setValueTextarea={setValueTextarea}
            valueTextarea={valueTextarea}
          />

          <ModalButton
            valueTextarea={valueTextarea}
            lessonType={lessonType}
            date={date}
            shedule={shedule}
            setLessonType={setLessonType}
            setValueTextarea={setValueTextarea}
            setOpen={setOpen}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalTypeLesson;
