import React from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Box, Button } from "@mui/material";
import Settings from "./Settings/Settings";
import { makeStyles } from "@mui/styles";
import { useAuth } from "../../../hook/useAuth";

const useStyles = makeStyles({
  box: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },
  buttonTitle: {
    display: "flex",
    alignItems: "center",
    cursor: "poiner",
    fontWeight: 400,
  },
});

const HeaderInner = () => {
  const classes = useStyles();
  const { role } = useAuth();

  return (
    <>
      <Box className={classes.box}>
        <Button
          startIcon={<MenuBookIcon />}
          className={classes.buttonTitle}
          color="inherit"
        >
          Цифровой журнал
        </Button>
      </Box>
      {role && <Settings />}
    </>
  );
};

export default HeaderInner;
