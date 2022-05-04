import { Box, Typography, TextField } from "@mui/material";
import React from "react";

const FormInput = ({ value, setValue, type, text, label }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Введите {text}
      </Typography>
      {type === "text" ? (
        <TextField
          fullWidth
          label={label}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant="outlined"
        />
      ) : (
        <TextField
          fullWidth
          label={label}
          type={type}
          value={value}
          InputProps={{ inputProps: { min: 0, max: 15 } }}
          onChange={(e) => setValue(e.target.value)}
          variant="outlined"
        />
      )}
    </Box>
  );
};

export default FormInput;
