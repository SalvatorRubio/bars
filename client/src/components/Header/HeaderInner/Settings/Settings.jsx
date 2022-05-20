import React, { useState } from "react";
import { Box, Button, Menu, MenuItem, TextField } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useAuth } from "../../../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import { ClassApi } from "../../../../ClassesApi/ClassApi";

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
  const { user, singout, role, id } = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(false);
  const [isValid, setValid] = useState(false);
  const open1 = Boolean(anchorEl);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setAnchorEl(null);
  };
  const handleClose = () => {
    setOpen(false);
    setValid(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.target);
  };
  const closeSetting = () => {
    setAnchorEl(null);
    setValid(false);
  };

  const handleExit = () => {
    singout(() => navigate("/"));
    sessionStorage.clear();
  };
  const updatePassword = () => {
    if (oldPassword && newPassword) {
      ClassApi.updatePassword(role, newPassword, id, oldPassword).then(
        (res) => {
          if (res.length > 0) {
            setError(true);
          } else {
            setNewPassword("");
            setOldPassword("");
            setValid(true);
            setError(false);
          }
        }
      );
    } else {
      setError(true);
    }
  };

  return (
    <Box>
      <Button
        startIcon={<KeyboardArrowDownIcon />}
        aria-expanded={open1 ? "true" : undefined}
        color="inherit"
        onClick={handleClick}
        variant="text"
        sx={{ mr: 5 }}
      >
        {user}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open1}
        onClose={closeSetting}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleOpen}>Изменить пароль</MenuItem>
      </Menu>
      <Button onClick={handleExit} variant="text" color="inherit">
        Выход
      </Button>
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
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
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
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                variant="outlined"
              />
            </Box>
            {error && (
              <Box display="flex" justifyContent="center">
                <Typography variant="p" color="red" align="center">
                  Неверно введены данные
                </Typography>
              </Box>
            )}
            {isValid && (
              <Box display="flex" justifyContent="center">
                <Typography variant="p" color="green" align="center">
                  Пароль успешно обновлен!
                </Typography>
              </Box>
            )}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                onClick={updatePassword}
                sx={{ m: "10px 10px" }}
                variant="contained"
              >
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
