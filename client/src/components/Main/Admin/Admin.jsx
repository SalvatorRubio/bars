import { Grid } from "@mui/material";
import React from "react";
import MainPanel from "./MainPanel/MainPanel";
import NavPanel from "./NavPanel/NavPanel";

const Admin = () => {
  return (
    <Grid sx={{ pt: "100px" }} justifyContent="center" container spacing={5}>
      <NavPanel />
      <MainPanel />
    </Grid>
  );
};

export default Admin;
