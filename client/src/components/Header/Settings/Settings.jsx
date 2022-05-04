import React, { useState } from "react";
import { Box, Button, Menu, MenuItem, TextField } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useAuth } from "../../../hook/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const Settings = () => {
  const { user } = useAuth();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.target);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
    setOpen(true);
  };

  return (
    <Box>
      <Button
        startIcon={<KeyboardArrowDownIcon />}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open1 ? "true" : undefined}
        color="inherit"
        onClick={handleClick}
        variant="text"
        sx={{ mr: 5 }}
      >
        {user}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open1}
        onClose={handleClose1}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose1}>Изменить пароль</MenuItem>
      </Menu>
      <Button variant="text" color="inherit">
        Выход
      </Button>
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                m: "10px 0",
              }}
            >
              <Typography variant="p">Введите старый пароль</Typography>
              <TextField
                id="outlined-basic"
                label="Старый пароль"
                variant="outlined"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                m: "10px 0",
              }}
            >
              <Typography variant="p">Введите новый пароль пароль</Typography>
              <TextField
                id="outlined-basic"
                label="Новый пароль"
                variant="outlined"
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button sx={{ m: "10px 10px" }} variant="contained">
                Изменить пароль
              </Button>
              <Button
                sx={{ m: "10px 10px" }}
                onClick={handleClose}
                variant="contained"
              >
                Закрыть
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Settings;
