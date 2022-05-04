import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Container } from "@mui/material";
import { useAuth } from "../../hook/useAuth";

import HeaderInner from "./HeaderInner";

const Header = () => {
  const { role } = useAuth();

  return (
    <>
      {role && (
        <AppBar position="absolute" color="primary">
          <Container>
            <Toolbar>
              <HeaderInner />
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  );
};

export default Header;
