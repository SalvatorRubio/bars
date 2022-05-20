import { Box, Typography, TextField } from "@mui/material";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, type, text, label }) => {
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
            label={label}
            type={type ? type : "text"}
            value={value}
            onChange={onChange}
          />
        )}
      />
    </Box>
  );
};

export default FormInput;
