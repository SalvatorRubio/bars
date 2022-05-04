import React from "react";
import {
  Box,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";

const FormSelect = ({ handleChange, category }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "5px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите категорию
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Категория</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Категория"
          onChange={handleChange}
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
    </Box>
  );
};

export default FormSelect;
