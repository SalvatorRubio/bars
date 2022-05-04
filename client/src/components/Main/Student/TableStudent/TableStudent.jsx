import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHeaderStudent from "./TableHeaderStudent/TableHeaderStudent";
import { Box } from "@mui/system";
import Calendar from "./Calendar/Calendar";
import TableBodyStudent from "./TableBodyStudent/TableBodyStudent";

const date = new Date();
const firstDate = new Date(date.setDate(date.getDate() - 14));
const lastDate = new Date();

const TableStudent = () => {
  const [dates, setDates] = useState([firstDate, lastDate]);

  return (
    <Box flexDirection="column">
      <Calendar dates={dates} setDates={setDates} />

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader>
            <TableHeaderStudent dates={dates} />
            <TableBodyStudent dates={dates} />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default TableStudent;
