import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import SelectGroup from "./SelectGroup/SelectGroup";
import SelectStudents from "./SelectStudents/SelectStudents";

const RestoreStudent = () => {
  const [student, setStudent] = useState("");
  const [group, setGroup] = useState("");

  const handleClick = () => {
    AdminApi.updateStudent(student, group).then(() => {
      setStudent("");
      setGroup("");
    });
  };

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ width: "100%", mb: 2, textAlign: "center" }}
      >
        Восстановление студента
      </Typography>
      <SelectStudents setStudent={setStudent} student={student} />
      <SelectGroup group={group} setGroup={setGroup} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mt: "20px",
        }}
      >
        <Button onClick={handleClick} variant="contained">
          Восстановить студента
        </Button>
      </Box>
    </Box>
  );
};

export default RestoreStudent;
