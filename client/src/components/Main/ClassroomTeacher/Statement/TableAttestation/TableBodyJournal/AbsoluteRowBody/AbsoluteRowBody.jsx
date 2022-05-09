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
    let discipArr = [...disciplines];
    let resArr = [];
    disciplines.map((item) => {
      return ClassTeacher.getAbsoluteAttestationKnowledge(
        dates[0],
        dates[1],
        item.discipline_id,
        group
      ).then((res) => {
        if (res.length > 0) {
          resArr = [...resArr, res[0]];
        }
        let arr = discipArr.map((item) => {
          // eslint-disable-next-line array-callback-return
          resArr.map((el) => {
            if (item.name === el.name) {
              item = { ...item, absolute: el.absolute };
            }
          });
          return item;
        });
        setAbsoluteKnowledge([...arr]);
      });
    });
  }, [disciplines, dates, group]);

  return (
    <TableRow>
      <TableCell>Абсолютная успеваемость</TableCell>
      {absoluteKnowledge.map((item) => {
        // eslint-disable-next-line array-callback-return
        return disciplines.map((discipline) => {
          if (discipline.name === item.name) {
            return (
              <TableCell key={item.discipline_id} className={classes.tableCell}>
                {item.absolute ? Number(item.absolute).toFixed(2) : ""}
              </TableCell>
            );
          }
        });
      })}
    </TableRow>
  );
};

export default AbsoluteRowBody;
