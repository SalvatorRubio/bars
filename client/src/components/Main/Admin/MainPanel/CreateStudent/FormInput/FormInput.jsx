import React from "react";
import { Box, Typography, TextField } from "@mui/material";
const FormInput = ({ label, text, type, name }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Введите {text}
      </Typography>
      <TextField
        fullWidth
        label={label}
        type={type}
        name={name}
        variant="outlined"
      />
    </Box>
  );
};

export default FormInput;
