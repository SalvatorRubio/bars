import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tableCell: {
    textAlign: "center",
    writingMode: "vertical-rl",
    transform: "scale(-1)",
    borderBottom: "none",
    borderTop: "1px solid rgba(224, 224, 224, 1)",
    borderLeft: "1px solid rgba(224, 224, 224, 1)",
  },
});

const TableHeaderJournal = ({ disciplines }) => {
  const classes = useStyles();

  return (
    <TableHead>
      <TableRow sx={{ height: "100px" }}>
        <TableCell sx={{ borderRight: "1px solid rgba(224, 224, 224, 1)" }}>
          Ученик
        </TableCell>
        {disciplines.map((item, idx) => {
          return (
            <TableCell
              sx={{
                background: idx % 2 !== 0 ? "rgba(240, 240, 240, 0.5)" : "",
              }}
              key={item.discipline_id}
              className={classes.tableCell}
            >
              {item.name}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default TableHeaderJournal;
