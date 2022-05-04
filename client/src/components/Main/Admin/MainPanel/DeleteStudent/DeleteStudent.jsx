import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import SelectGroup from "../SelectGroup/SelectGroup";
import ModalDelete from "./ModalDelete/ModalDelete";
import OrderKick from "./OrderKick/OrderKick";
import SelectStudents from "./SelectStudents/SelectStudents";

const DeleteStudent = () => {
  const [open, setOpen] = useState(false);
  const [student, setStudent] = useState("");
  const [group, setGroup] = useState("");
  const [text, setText] = useState("");
  const handleOpen = () => {
    if (student && group && text) {
      setOpen(true);
    }
  };
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ width: "100%", mb: 2, textAlign: "center" }}
      >
        Удаление студента
      </Typography>
      <SelectGroup group={group} setGroup={setGroup} />
      <SelectStudents student={student} group={group} setStudent={setStudent} />
      <OrderKick text={text} setText={setText} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mt: "20px",
        }}
      >
        <Button onClick={handleOpen} variant="contained" color="error">
          Отчислить студента
        </Button>
      </Box>
      <ModalDelete
        open={open}
        student={student}
        setOpen={setOpen}
        setStudent={setStudent}
        setGroup={setGroup}
        setText={setText}
        text={text}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default DeleteStudent;
