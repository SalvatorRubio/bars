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

const ModalDelete = ({ open, handleClose, auditorium, setAuditorium }) => {
  const handleDelete = () => {
    AdminApi.deleteAuditorium(auditorium).then((res) => {
      console.log(res);
      handleClose();
      setAuditorium("");
    });
  };
  return (
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
          <Typography sx={{ textAlign: "center" }} variant="h6" component="h2">
            Вы действительно хотите удалить аудиторию?
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
              onClick={handleDelete}
              sx={{ m: "0px 10px" }}
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
