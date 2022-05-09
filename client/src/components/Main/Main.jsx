import React from "react";
import Teacher from "./Teacher/Teacher";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { useAuth } from "../../hook/useAuth";

import { Route, Routes } from "react-router-dom";
import RequireAuth from "../../hoc/RequireAuth";
import Login from "../Login/Login";
import Admin from "./Admin/Admin";
import Student from "./Student/Student";
import ClassroomTeacher from "./ClassroomTeacher/ClassroomTeacher";

const Main = () => {
  const { role } = useAuth();
  return (
    <Box sx={{ maxHeight: "100vh" }}>
      <Container>
        <Routes>
          <Route
            path="/admin/*"
            element={<RequireAuth>{role === 1 && <Admin />}</RequireAuth>}
          />
          <Route
            path="/teacher"
            element={<RequireAuth>{role === 2 && <Teacher />}</RequireAuth>}
          />
          <Route
            path="/student"
            element={<RequireAuth>{role === 3 && <Student />}</RequireAuth>}
          />
          <Route
            path="/classroom-teacher/*"
            element={
              <RequireAuth>{role === 4 && <ClassroomTeacher />}</RequireAuth>
            }
          />
          <Route path="/" element={<Login />} />
        </Routes>
      </Container>
    </Box>
  );
};

export default Main;
