import React from "react";
import { Typography, TextField } from "@mui/material";

const SemesterInput = ({ label, text, width, textAlign, value, setValue }) => {
  return (
    <>
      <Typography
        sx={{ width: "100%", maxWidth: { width }, textAlign: { textAlign } }}
        variant="p"
      >
        {text}
      </Typography>
      <TextField
        InputProps={{ inputProps: { min: 0, max: 15 } }}
        sx={{ width: "150px" }}
        label={label}
        value={value}
        type="number"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        variant="outlined"
      />
    </>
  );
};

export default SemesterInput;
