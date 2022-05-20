import React from "react";
import { Box, Typography, TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
const FormInput = ({ label, text, type, name }) => {
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
            fullWidth
            error={!!errors[name]}
            label={label}
            value={value}
            type={type ? type : "text"}
            variant="outlined"
            onChange={onChange}
          />
        )}
      />
    </Box>
  );
};

export default FormInput;
