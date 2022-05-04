import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ModalJournal = ({ open, handleClose }) => {
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
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Ведомости
          </Typography>
          <FormGroup sx={{ mt: 2 }}>
            <FormControlLabel
              control={<Checkbox />}
              label="Единая ведомость по рубежной аттестации"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Единая сводная ведомость по сессии"
            />
          </FormGroup>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
              mt: 2,
            }}
          >
            <Button variant="contained">Просмотреть ведомость</Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalJournal;
