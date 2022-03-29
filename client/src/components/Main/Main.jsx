import React from "react";
import classes from "./Main.module.scss";
import Teacher from "./Teacher/Teacher";

// import { Route, Routes } from "react-router-dom";
// import RequireAuth from "./hoc/RequireAuth";
// import Login from "./components/Login/Login";

const Main = () => {
  return (
    <main className={classes.main}>
      <Teacher />
    </main>
  );
};

export default Main;
