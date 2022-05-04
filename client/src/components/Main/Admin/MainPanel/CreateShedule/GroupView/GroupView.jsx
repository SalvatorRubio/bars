import React from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const GroupView = ({ setGroupView, groupView }) => {
  const handleChange = (e) => {
    setGroupView(e.target.value);
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите вид группы
      </Typography>
      <FormControl fullWidth>
        <InputLabel>Вид группы</InputLabel>
        <Select value={groupView} label="Вид группы" onChange={handleChange}>
          <MenuItem value="Вся группа">Вся группа</MenuItem>
          <MenuItem value="1 п/г">Первая подгруппа</MenuItem>
          <MenuItem value="2 п/г">Вторая подгруппа</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default GroupView;
