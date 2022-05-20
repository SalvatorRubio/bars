import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const FormInput = ({ label, text, name, type }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "5px 0" }}>
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
            fullWidth
            type={type ? type : "text"}
            label={label}
            value={value}
            onChange={onChange}
          />
        )}
      />
    </Box>
  );
};

export default FormInput;
