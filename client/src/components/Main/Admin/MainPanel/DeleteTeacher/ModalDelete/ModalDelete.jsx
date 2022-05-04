import React from "react";
import { Box, Typography, Button, Modal, Backdrop, Fade } from "@mui/material";
import { AdminApi } from "../../../../../../ClassesApi/AdminApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ModalDelete = ({ open, handleClose, setOpen, teacher, setTeacher }) => {
  const handleClick = () => {
    AdminApi.deleteTeacher(teacher).then((res) => {
      console.log(res);
      setOpen(false);
      setTeacher("");
    });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 0,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            sx={{ textAlign: "center" }}
            variant="h6"
            component="h2"
          >
            Вы действительно хотите удалить учителя?
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              mt: "20px",
            }}
          >
            <Button
              sx={{ m: "0px 10px" }}
              onClick={handleClick}
              variant="contained"
              color="error"
            >
              Да
            </Button>
            <Button
              sx={{ m: "0px 10px" }}
              onClick={handleClose}
              variant="contained"
            >
              Нет
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalDelete;
