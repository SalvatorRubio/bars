import React from "react";
import {
  Box,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const FormSelectCategory = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "5px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите категорию
      </Typography>
      <Controller
        rules={{ required: true }}
        control={control}
        name="category"
        render={({ field: { onChange, value } }) => (
          <FormControl fullWidth error={!!errors.category}>
            <InputLabel>Категория</InputLabel>
            <Select
              value={value}
              label="Категория"
              onChange={onChange}
              name="category"
            >
              <MenuItem value="Молодой специалист">Молодой специалист</MenuItem>
              <MenuItem value="Учитель">Учитель</MenuItem>
              <MenuItem value="Педагог первой категории">
                Педагог первой категории
              </MenuItem>
              <MenuItem value="Педагог высшей категории">
                Педагог высшей категории
              </MenuItem>
            </Select>
          </FormControl>
        )}
      />
    </Box>
  );
};

export default FormSelectCategory;
