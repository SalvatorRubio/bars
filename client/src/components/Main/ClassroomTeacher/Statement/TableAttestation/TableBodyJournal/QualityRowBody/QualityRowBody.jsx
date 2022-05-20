import React, { useEffect, useState } from "react";
import { ClassTeacher } from "../../../../../../../ClassesApi/ClassroomTeacher";
import { TableCell, TableRow } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  tableCell: {
    textAlign: "center",
  },
});
const QualityRowBody = ({ disciplines, dates, group }) => {
  const [qualityKnowledge, setQualityKnowledge] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    return ClassTeacher.getQualityAttestationKnowledge(
      dates[0],
      dates[1],
      group
    ).then((res) => {
      setQualityKnowledge(res);
    });
  }, [disciplines, dates, group]);
  return (
    <TableRow>
      <TableCell>Качество знаний</TableCell>
      {disciplines.map((discipline, i) => {
        if (qualityKnowledge.find((item) => discipline.name === item.name)) {
          // eslint-disable-next-line array-callback-return
          return qualityKnowledge.map((item) => {
            if (discipline.name === item.name) {
              return (
                <TableCell
                  key={item.discipline_id}
                  className={classes.tableCell}
                >
                  {item.quality ? Number(item.quality).toFixed(2) : ""}
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

export default QualityRowBody;
