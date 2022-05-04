import { Grid, Paper } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import EditGroup from "./EditGroup/EditGroup";
import ConnectTeacherGroup from "./ConnectTeacherGroup/ConnectTeacherGroup";
import CreateDiscipline from "./CreateDiscipline/CreateDiscipline";
import CreateGroup from "./CreateGroup/CreateGroup";
import CreateShedule from "./CreateShedule/CreateShedule";
import CreateStudent from "./CreateStudent/CreateStudent";
import CreateTeacher from "./CreateTeacher/CreateTeacher";
import DeleteStudent from "./DeleteStudent/DeleteStudent";
import DeleteTeacher from "./DeleteTeacher/DeleteTeacher";
import DeleteGroup from "./DeleteGroup/DeleteGroup";
import CreateSpeciality from "./CreateSpeciality/CreateSpeciality";
import CreateAuditorium from "./CreateAuditorium/CreateAuditorium";
import DeleteAuditorium from "./DeleteAuditorium/DeleteAuditorium";
import AcademicPlan from "./AcademicPlan/AcademicPlan";
import RestoreStudent from "./RestoreStudent/RestoreStudent";
import EditTeacher from "./EditTeacher/EditTeacher";
import EditDiscipline from "./EditDiscipline/EditDiscipline";

const MainPanel = () => {
  return (
    <Grid item xs={8}>
      <Paper elevation={0}>
        <Routes>
          <Route path="create-shedule" element={<CreateShedule />} />
          <Route path="academic-plan" element={<AcademicPlan />} />
          <Route path="create-discipline" element={<CreateDiscipline />} />
          <Route path="edit-discipline" element={<EditDiscipline />} />
          <Route path="create-teacher" element={<CreateTeacher />} />
          <Route path="edit-teacher" element={<EditTeacher />} />
          <Route path="delete-teacher" element={<DeleteTeacher />} />
          <Route
            path="connect-teacher-group"
            element={<ConnectTeacherGroup />}
          />
          <Route path="create-student" element={<CreateStudent />} />
          <Route path="restore-student" element={<RestoreStudent />} />
          <Route path="delete-student" element={<DeleteStudent />} />
          <Route path="create-group" element={<CreateGroup />} />
          <Route path="release-group" element={<DeleteGroup />} />
          <Route path="edit-group" element={<EditGroup />} />
          <Route path="create-speciality" element={<CreateSpeciality />} />
          <Route path="create-auditorium" element={<CreateAuditorium />} />
          <Route path="delete-auditorium" element={<DeleteAuditorium />} />
        </Routes>
      </Paper>
    </Grid>
  );
};

export default MainPanel;
