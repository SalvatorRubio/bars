import React from "react";
import { Box, Typography, TextField } from "@mui/material";

const FormInput = ({ label, text, name, type }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "5px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Введите {text}
      </Typography>
      <TextField fullWidth name={name} type={type} label={label} />
    </Box>
  );
};

export default FormInput;
