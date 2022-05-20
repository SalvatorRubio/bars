import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const InputForm = ({ label, text, name }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Введите {text}
      </Typography>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextField
            error={!!errors[name]}
            InputProps={{ inputProps: { min: 0, max: 15 } }}
            fullWidth
            value={value}
            onChange={onChange}
            label={label}
            type="number"
          />
        )}
      />
    </Box>
  );
};

export default InputForm;
