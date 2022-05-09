import React from "react";
import TableHeaderJournal from "./TableHeaderJournal/TableHeaderJournal";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBodyJournal from "./TableBodyJournal/TableBodyJournal";
import { Paper } from "@mui/material";
const TableAttestation = ({ disciplines, group, dates, statement }) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeaderJournal disciplines={disciplines} />
          <TableBodyJournal
            group={group}
            disciplines={disciplines}
            dates={dates}
            statement={statement}
          />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableAttestation;
