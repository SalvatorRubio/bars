import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import SelectGroup from "./SelectGroup/SelectGroup";
import ModalDelete from "./ModalDelete/ModalDelete";

const DeleteGroup = () => {
  const [group, setGroup] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (group) setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ width: "100%", mb: 2, textAlign: "center" }}
      >
        Удалить группу
      </Typography>
      <SelectGroup group={group} setGroup={setGroup} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mt: "20px",
        }}
      >
        <Button onClick={handleOpen} color="error" variant="contained">
          Удалить группу
        </Button>
      </Box>
      <ModalDelete handleClose={handleClose} open={open} group={group} />
    </Box>
  );
};

export default DeleteGroup;
