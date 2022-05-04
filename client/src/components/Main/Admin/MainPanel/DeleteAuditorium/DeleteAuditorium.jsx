import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import ModalDelete from "./ModalDelete/ModalDelete";
import SelectAuditorium from "./SelectAuditorium/SelectAuditorium";

const DeleteAuditorium = () => {
  const [auditorium, setAuditorium] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ width: "100%", mb: 2, textAlign: "center" }}
      >
        Удаление аудитории
      </Typography>
      <SelectAuditorium setValue={setAuditorium} value={auditorium} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mt: "20px",
        }}
      >
        <Button onClick={handleOpen} variant="contained" color="error">
          Удалить аудиторию
        </Button>
      </Box>
      <ModalDelete
        open={open}
        auditorium={auditorium}
        setAuditorium={setAuditorium}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default DeleteAuditorium;
