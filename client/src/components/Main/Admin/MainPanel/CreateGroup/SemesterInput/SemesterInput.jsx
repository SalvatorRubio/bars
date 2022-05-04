import React from "react";
import { Typography, TextField } from "@mui/material";

const SemesterInput = ({ label, text, width, name, textAlign }) => {
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
        type="number"
        name={name}
        variant="outlined"
      />
    </>
  );
};

export default SemesterInput;
