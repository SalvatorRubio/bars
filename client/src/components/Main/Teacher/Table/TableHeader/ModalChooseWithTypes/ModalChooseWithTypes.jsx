import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import { Box, Typography, Button } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useAuth } from "../../../../../../hook/useAuth";
import { TeacherApi } from "../../../../../../ClassesApi/TeacherApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
};

const ModalChooseWithTypes = ({
  open,
  setOpen,
  setChoosenLessonTypes,
  setMiddleMarksByTypes,
  choosenLessonTypes,
  discipline,
}) => {
  const handleClose = () => setOpen(false);
  const types = [
    {
      value: "Зачет",
      name: "Зачет",
    },
    {
      value: "Экзамен",
      name: "Экзамен",
    },
    {
      value: "Аттестация",
      name: "Аттестация",
    },
    {
      value: "Курсовая работа",
      name: "Курсовые",
    },
    {
      value: "Практическая работа",
      name: "Практические",
    },
    {
      value: "Лабораторная работа",
      name: "Лабораторные",
    },
    {
      value: "Практическая-теоретическая работа",
      name: "Практические-теоретические",
    },
  ];
  const { id, group } = useAuth();

  const handleChange = (e) => {
    if (!e.target.checked) {
      setChoosenLessonTypes((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    }
    if (!choosenLessonTypes.includes(e.target.value)) {
      setChoosenLessonTypes((prev) => [...prev, e.target.value]);
    }
  };

  const handleClick = () => {
    TeacherApi.getMiddleMarksByTypes(
      id,
      group,
      discipline,
      choosenLessonTypes
    ).then((res) => console.log(res));
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
          <Typography sx={{ width: "100%", textAlign: "center" }}>
            Просмотреть итоговые оценки по типам уроков
          </Typography>
          <FormGroup
            sx={{
              display: "flex",
              width: "300px",
              mt: 2,
            }}
          >
            {types.map((item) => {
              return (
                <FormControlLabel
                  key={item.value}
                  control={<Checkbox value={item.value} />}
                  onChange={handleChange}
                  label={item.name}
                />
              );
            })}
          </FormGroup>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mt: "20px",
            }}
          >
            <Button onClick={handleClick} variant="contained">
              Просмотреть
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalChooseWithTypes;
