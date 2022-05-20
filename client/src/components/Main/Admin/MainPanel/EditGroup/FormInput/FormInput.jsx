import React from "react";
import { Typography, TextField, Box } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box display="flex" alignItems="center" sx={{ m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Номер группы
      </Typography>
      <Controller
        control={control}
        name="number"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextField
            error={!!errors.number}
            fullWidth
            InputProps={{ inputProps: { min: 0, max: 15 } }}
            label="Номер группы"
            value={value}
            type="number"
            onChange={onChange}
          />
        )}
      />
    </Box>
  );
};

export default FormInput;
