import { Box, Typography, TextField } from "@mui/material";
import React from "react";

const FormInput = ({ value, setValue, type, text, label, valueKey, arr }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "5px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Введите {text}
      </Typography>
      {type === "text" ? (
        <TextField
          fullWidth
          label={label}
          type={type}
          value={value}
          onChange={(e) => {
            setValue(
              arr.map((item) => {
                item[valueKey] = e.target.value;
                return item;
              })
            );
          }}
          variant="outlined"
        />
      ) : (
        <TextField
          fullWidth
          label={label}
          type={type}
          value={value}
          InputProps={{ inputProps: { min: 0, max: 150 } }}
          onChange={(e) =>
            setValue(
              arr.map((item) => {
                item[valueKey] = e.target.value;
                return item;
              })
            )
          }
          variant="outlined"
        />
      )}
    </Box>
  );
};

export default FormInput;
