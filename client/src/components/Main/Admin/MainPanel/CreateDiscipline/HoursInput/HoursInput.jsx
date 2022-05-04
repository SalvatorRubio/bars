import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const HoursInput = ({ text, value, setValue }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        m: "0 20px",
      }}
    >
      <Typography
        sx={{ mr: 2, width: "200px", textAlign: "center" }}
        variant="p"
      >
        {text}
      </Typography>
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        InputProps={{ inputProps: { min: 0, max: 150 } }}
        type="number"
        sx={{ width: "150px" }}
        label="Часы"
        variant="outlined"
      />
    </Box>
  );
};

export default HoursInput;
