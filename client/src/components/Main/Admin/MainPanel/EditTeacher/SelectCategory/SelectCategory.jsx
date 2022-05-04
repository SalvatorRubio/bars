import React from "react";
import {
  Box,
  Typography,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";

const SelectCategory = ({ setValue, value, valueKey, arr }) => {
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
          value={value}
          label="Категория"
          onChange={(e) => {
            setValue(
              arr.map((item) => {
                item[valueKey] = e.target.value;
                return item;
              })
            );
          }}
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

export default SelectCategory;
