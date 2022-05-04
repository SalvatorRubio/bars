import { Box, Typography, TextField } from "@mui/material";
import React from "react";

const OrderKick = ({ text, setText }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Введите приказ об отчислении
      </Typography>
      <TextField
        placeholder="Приказ"
        multiline
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
        minRows={2}
        maxRows={6}
      />
    </Box>
  );
};

export default OrderKick;
