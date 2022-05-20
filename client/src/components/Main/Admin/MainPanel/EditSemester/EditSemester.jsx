import React, { useState } from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import { Box, Typography, Button } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const EditSemester = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const updateSemester = () => {
    AdminApi.updateSemester();
    handleClose();
  };
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          variant="h6"
          sx={{ width: "100%", mb: 2, textAlign: "center" }}
        >
          Перевод всех групп на следующий семестр
        </Typography>
        <Button
          onClick={handleOpen}
          sx={{ width: "100%", mt: "20px" }}
          variant="contained"
        >
          Перевести
        </Button>
      </Box>
      <Modal
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
            <Typography variant="h6" component="h2">
              Вы уверены, что хотите перевести на следующий семестр?
            </Typography>
            <Box display="flex" justifyContent="flex-end">
              <Button
                onClick={updateSemester}
                sx={{ m: "20px 20px  0 20px" }}
                variant="contained"
              >
                Да
              </Button>
              <Button
                onClick={handleClose}
                sx={{ m: "20px 20px  0 20px" }}
                variant="contained"
              >
                Нет
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default EditSemester;
