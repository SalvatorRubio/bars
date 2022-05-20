import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const HoursInput = ({ text, name }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
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
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextField
            error={!!errors[name]}
            value={value}
            onChange={onChange}
            InputProps={{ inputProps: { min: 0, max: 150 } }}
            type="number"
            sx={{ width: "150px" }}
            label="Часы"
          />
        )}
      />
    </Box>
  );
};

export default HoursInput;
