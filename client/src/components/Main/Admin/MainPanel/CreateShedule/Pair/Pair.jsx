import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Typography, TextField } from "@mui/material";

const Pair = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Typography
        sx={{ width: "100%", textAlign: "center", maxWidth: "200px" }}
        variant="p"
      >
        Введите номер пары
      </Typography>
      <Controller
        name="pair"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextField
            onChange={onChange}
            value={value}
            label="Пара"
            type="number"
            error={!!errors.pair}
            helperText={errors.pair && "Выберите пару"}
          />
        )}
      />
    </>
  );
};

export default Pair;
