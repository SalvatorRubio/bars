import React from "react";
import { Box, Typography, TextField } from "@mui/material";

const InputForm = ({ label, text, type, name }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Введите {text}
      </Typography>
      <TextField
        InputProps={{ inputProps: { min: 0, max: 15 } }}
        fullWidth
        label={label}
        type="number"
        name={name}
      />
    </Box>
  );
};

export default InputForm;
