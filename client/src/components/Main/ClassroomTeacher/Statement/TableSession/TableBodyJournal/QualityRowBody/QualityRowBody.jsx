import React, { useEffect, useState } from "react";
import { ClassTeacher } from "../../../../../../../ClassesApi/ClassroomTeacher";
import { TableCell, TableRow } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  tableCell: {
    textAlign: "center",
  },
});
const QualityRowBody = ({ disciplines, group }) => {
  const [qualityKnowledge, setQualityKnowledge] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    let discipArr = [...disciplines];
    let resArr = [];
    disciplines.map((item) => {
      return ClassTeacher.getQualitySessionKnowledge(
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
              item = { ...item, quality: el.quality };
            }
          });
          return item;
        });
        setQualityKnowledge([...arr]);
      });
    });
  }, [disciplines, group]);

  return (
    <TableRow>
      <TableCell>Качество знаний</TableCell>
      {qualityKnowledge.map((item) => {
        // eslint-disable-next-line array-callback-return
        return disciplines.map((discipline) => {
          if (discipline.name === item.name) {
            return (
              <TableCell key={item.discipline_id} className={classes.tableCell}>
                {item.quality ? Number(item.quality).toFixed(2) : ""}
              </TableCell>
            );
          }
        });
      })}
    </TableRow>
  );
};

export default QualityRowBody;
