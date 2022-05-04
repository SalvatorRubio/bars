import React from "react";
import AcademicTableBody from "./AcademicTableBody/AcademicTableBody";
import TableHeader from "./TableHeader/TableHeader";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";

import TableContainer from "@mui/material/TableContainer";

const AcademicPlanTable = ({ disciplines, value, setDisciplines }) => {
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeader value={value} />
          <AcademicTableBody
            disciplines={disciplines}
            setDisciplines={setDisciplines}
          />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default AcademicPlanTable;
