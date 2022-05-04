import { Paper, TableContainer, Table } from "@mui/material";
import React, { useState } from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableMain from "./TableMain/TableMain";

const TableTeacher = (props) => {
  const [middleMarksByTypes, setMiddleMarksByTypes] = useState([]);
  return (
    <Paper elevation={0} sx={{ width: "100%", marginTop: "10px" }}>
      <TableContainer sx={{ maxHeight: 640 }}>
        <Table stickyHeader>
          <TableHeader
            item={props}
            setMiddleMarksByTypes={setMiddleMarksByTypes}
            middleMarksByTypes={middleMarksByTypes}
          />
          <TableMain item={props} middleMarksByTypes={middleMarksByTypes} />
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableTeacher;
