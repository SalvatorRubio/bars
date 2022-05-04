import React from "react";
import { Box, Typography, TextField } from "@mui/material";

const InputForm = ({ label, text, value, setValue }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Введите {text}
      </Typography>
      <TextField
        InputProps={{ inputProps: { min: 0, max: 15 } }}
        fullWidth
        label={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="number"
      />
    </Box>
  );
};

export default InputForm;
