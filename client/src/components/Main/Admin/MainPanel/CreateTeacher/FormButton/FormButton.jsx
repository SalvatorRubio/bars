import React from "react";
import { Box, Button } from "@mui/material";
const FormButton = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        mt: "20px",
      }}
    >
      <Button type="submit" variant="contained">
        Создать учителя
      </Button>
    </Box>
  );
};

export default FormButton;
