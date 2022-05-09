import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";
const SelectStatement = ({ statement, setStatement }) => {
  const navigate = useNavigate();
  const handleChange = (event) => {
    setStatement(event.target.value);
    sessionStorage.setItem("statement", event.target.value);
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{
        width: "300px",
      }}
    >
      <Typography
        sx={{ width: "100%", maxWidth: "300px", textAlign: "center" }}
        variant="p"
      >
        Выберите ведомость
      </Typography>
      <FormControl fullWidth sx={{ mt: 1 }}>
        <InputLabel>Ведомость</InputLabel>
        <Select value={statement} label="Ведомость" onChange={handleChange}>
          <MenuItem
            value="Рубежная аттестация"
            onClick={() => navigate("table-attestation")}
          >
            Ведомость по рубежной аттестации
          </MenuItem>
          <MenuItem onClick={() => navigate("table-session")} value="Сессия">
            Ведомость по сессии
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectStatement;
