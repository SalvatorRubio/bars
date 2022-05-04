import { Box, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import TableHeaderJournal from "./TableHeaderJournal/TableHeaderJournal";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBodyJournal from "./TableBodyJournal/TableBodyJournal";
import { ClassTeacher } from "../../../../ClassesApi/ClassroomTeacher";
import NavStatement from "./NavStatement/NavStatement";

const date = new Date();
const firstDate = new Date(date.setDate(date.getDate() - 14));
const lastDate = new Date();

const Statement = () => {
  const [dates, setDates] = useState([firstDate, lastDate]);
  const [group, setGroup] = useState("");
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
      />
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 750 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableHeaderJournal disciplines={disciplines} />
            </TableHead>
            <TableBodyJournal
              group={group}
              disciplines={disciplines}
              dates={dates}
            />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Statement;
