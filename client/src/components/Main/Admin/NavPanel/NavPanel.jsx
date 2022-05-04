import { Grid } from "@mui/material";

import React, { useState } from "react";
import TeacherAccord from "./TeacherAccord/TeacherAccord";
import StudentAccord from "./StudentAccord/StudentAccord";
import GroupAccord from "./GroupAccord/GroupAccord";
import DisciplineAccord from "./DisciplineAccord/DisciplineAccord";
import SpecialityAccord from "./SpecialityAccord/SpecialityAccord";
import AuditoriumAccord from "./AuditoriumAccord/AuditoriumAccord";
import ScheduleAccord from "./ScheduleAccord/ScheduleAccord";

const NavPanel = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Grid item xs={4}>
      <ScheduleAccord expanded={expanded} handleChange={handleChange} />
      <TeacherAccord expanded={expanded} handleChange={handleChange} />
      <StudentAccord expanded={expanded} handleChange={handleChange} />
      <GroupAccord expanded={expanded} handleChange={handleChange} />
      <DisciplineAccord expanded={expanded} handleChange={handleChange} />
      <SpecialityAccord expanded={expanded} handleChange={handleChange} />
      <AuditoriumAccord expanded={expanded} handleChange={handleChange} />
    </Grid>
  );
};

export default NavPanel;
