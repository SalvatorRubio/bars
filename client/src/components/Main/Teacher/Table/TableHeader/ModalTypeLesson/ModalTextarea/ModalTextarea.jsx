import React from "react";
import { Box, Typography, TextField } from "@mui/material";
const ModalTextarea = ({ setValueTextarea, valueTextarea }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        m: "10px 0",
      }}
    >
      <Typography variant="p">Введите тему урока</Typography>
      <TextField
        placeholder="Тема урока"
        multiline
        rows={2}
        value={valueTextarea}
        onChange={(e) => setValueTextarea(e.target.value)}
        sx={{ width: "246px" }}
      />
    </Box>
  );
};

export default ModalTextarea;
