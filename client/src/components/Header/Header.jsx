import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";

import HeaderInner from "./HeaderInner/HeaderInner";

const Header = () => {
  return (
    <>
      <AppBar position="absolute" color="primary">
        <Container>
          <Toolbar>
            <HeaderInner />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
