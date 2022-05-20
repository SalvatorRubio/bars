import React, { useEffect, useState } from "react";
import { ClassTeacher } from "../../../../../../../ClassesApi/ClassroomTeacher";
import { TableCell, TableRow } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  tableCell: {
    textAlign: "center",
  },
});
const AbsoluteRowBody = ({ disciplines, dates, group }) => {
  const [absoluteKnowledge, setAbsoluteKnowledge] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    disciplines.map((item) => {
      return ClassTeacher.getAbsoluteAttestationKnowledge(
        dates[0],
        dates[1],
        group
      ).then((res) => {
        setAbsoluteKnowledge(res);
      });
    });
  }, [disciplines, dates, group]);
  return (
    <TableRow>
      <TableCell>Абсолютная успеваемость</TableCell>
      {disciplines.map((discipline, i) => {
        if (absoluteKnowledge.find((item) => discipline.name === item.name)) {
          // eslint-disable-next-line array-callback-return
          return absoluteKnowledge.map((item) => {
            if (discipline.name === item.name) {
              return (
                <TableCell
                  key={item.discipline_id}
                  className={classes.tableCell}
                >
                  {item.absolute ? Number(item.absolute).toFixed(2) : ""}
                </TableCell>
              );
            }
          });
        } else {
          return <TableCell key={i} className={classes.tableCell}></TableCell>;
        }
      })}
    </TableRow>
  );
};

export default AbsoluteRowBody;
