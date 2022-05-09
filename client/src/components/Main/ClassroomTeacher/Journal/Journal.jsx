import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { ClassTeacher } from "../../../../ClassesApi/ClassroomTeacher";
import NavJournal from "./NavJournal/NavJournal";
import TableHeaderJournal from "./TableHeaderJournal/TableHeaderJournal";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBodyJournal from "./TableBodyJournal/TableBodyJournal";
import { Paper } from "@mui/material";

const date = new Date();
const firstDate = new Date(date.setDate(date.getDate() - 14));
const lastDate = new Date();
const Journal = () => {
  const [dates, setDates] = useState([firstDate, lastDate]);
  const [group, setGroup] = useState("");
  const [disciplines, setDisciplines] = useState([]);
  useEffect(() => {
    ClassTeacher.getDisciplines(group).then((res) => setDisciplines(res));
  }, [group]);
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <NavJournal
        setGroup={setGroup}
        group={group}
        dates={dates}
        setDates={setDates}
      />
      {group && (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 600 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHeaderJournal disciplines={disciplines} />
              <TableBodyJournal
                group={group}
                disciplines={disciplines}
                dates={dates}
              />
            </Table>
          </TableContainer>
        </Paper>
      )}
    </Box>
  );
};

export default Journal;
