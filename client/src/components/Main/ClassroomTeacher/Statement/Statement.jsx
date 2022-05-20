import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ClassTeacher } from "../../../../ClassesApi/ClassroomTeacher";
import NavStatement from "./NavStatement/NavStatement";
import { Routes, Route } from "react-router-dom";
import TableAttestation from "./TableAttestation/TableAttestation";
import TableSession from "./TableSession/TableSession";

const firstDate = new Date(new Date().setDate(new Date().getDate() - 14));
const lastDate = new Date(new Date().setDate(new Date().getDate() + 1));

const Statement = () => {
  const [dates, setDates] = useState([firstDate, lastDate]);
  const [group, setGroup] = useState("");
  const [statement, setStatement] = useState("");
  const [disciplines, setDisciplines] = useState([]);
  useEffect(() => {
    ClassTeacher.getDisciplines(group).then((res) => setDisciplines(res));
  }, [group]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <NavStatement
        setGroup={setGroup}
        group={group}
        dates={dates}
        setDates={setDates}
        statement={statement}
        setStatement={setStatement}
      />
      <Routes>
        {group && dates && (
          <Route
            path="table-attestation"
            element={
              <TableAttestation
                disciplines={disciplines}
                group={group}
                dates={dates}
                statement={statement}
              />
            }
          />
        )}
        {group && (
          <Route
            path="table-session"
            element={
              <TableSession
                disciplines={disciplines}
                group={group}
                statement={statement}
              />
            }
          />
        )}
      </Routes>
    </Box>
  );
};

export default Statement;
