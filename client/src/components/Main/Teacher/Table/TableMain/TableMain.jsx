/* eslint-disable eqeqeq */
import { TableBody, TableCell, TableRow } from "@mui/material";
import React, { useState, useEffect } from "react";
import SelectItem from "./SelectItem/SelectItem";
import { TeacherApi } from "../../../../../ClassesApi/TeacherApi";
import { useAuth } from "../../../../../hook/useAuth";
import MarkItem from "./MarkItem/MarkItem";

const TableMain = (props) => {
  const { dates, discipline, rows, setRows, lessonType } = props.item;
  const { id, group } = useAuth();
  const [isEdit, setIsEdit] = useState(false);
  const [itemIdToEdit, setItemIdToEdit] = useState();
  const [selectedMark, setSelectedMark] = useState();
  const [absoluteKnowledge, setAbsoluteKnowledge] = useState([]);
  const [qualityKnowledge, setQualityKnowledge] = useState([]);
  useEffect(() => {
    TeacherApi.getQualityKnowledge(
      dates[0],
      dates[1],
      discipline,
      group,
      lessonType
    ).then((res) => setQualityKnowledge(res));
    TeacherApi.getAbsoluteKnowledge(
      dates[0],
      dates[1],
      discipline,
      group,
      lessonType
    ).then((res) => setAbsoluteKnowledge(res));
  }, [group, dates, selectedMark, discipline, lessonType]);

  useEffect(() => {
    TeacherApi.getStudentAndMarks(
      id,
      group,
      discipline,
      lessonType,
      dates[0],
      dates[1]
    ).then((res) => setRows(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMark]);

  const handleChange = (e, mark) => {
    setIsEdit(true);
    setItemIdToEdit(e.target.id);
    setSelectedMark(mark);
  };
  return (
    <TableBody>
      {rows.map((item, index) => {
        let splitMarks = item.mark.split(",");
        let splitShedule = item.shedule_id.split(",");
        return (
          <TableRow hover tabIndex={-1} key={item.student_id}>
            <TableCell sx={{ maxWidth: "300px", height: "20px" }}>
              {index + 1}.{item.surname} {item.name}
            </TableCell>
            {splitMarks.map((itemMark, i) => {
              if (isEdit && itemIdToEdit === `student_${item.student_id}${i}`) {
                return (
                  <SelectItem
                    student={item.student_id}
                    shedule={splitShedule[i]}
                    key={i}
                    setIsEdit={setIsEdit}
                    setValue={setSelectedMark}
                    value={selectedMark}
                  />
                );
              } else {
                return (
                  <MarkItem
                    itemMark={itemMark}
                    i={i}
                    key={i}
                    student={item.student_id}
                    handleChange={handleChange}
                  />
                );
              }
            })}
            <TableCell
              sx={{ borderLeft: "1px solid #ccc", textAlign: " center" }}
            >
              {item.middle_mark > 2 ? Number(item.middle_mark).toFixed(2) : 2}
            </TableCell>
          </TableRow>
        );
      })}
      <TableRow>
        <TableCell></TableCell>
        {rows.length > 0 &&
          rows[0].mark.split(",").map((item, index) => {
            return <TableCell key={index}></TableCell>;
          })}
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Качество знаний</TableCell>
        <TableCell sx={{ textAlign: " center", borderRight: "1px solid #ccc" }}>
          {qualityKnowledge.length > 0 && qualityKnowledge[0].quality
            ? qualityKnowledge[0].quality.replace(/.0*$/, "") + "%"
            : "0%"}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Абсолютная успеваемость</TableCell>
        <TableCell sx={{ textAlign: " center", borderRight: "1px solid #ccc" }}>
          {absoluteKnowledge.length > 0 && absoluteKnowledge[0].absolute
            ? absoluteKnowledge[0].absolute.replace(/.0*$/, "") + "%"
            : "0%"}
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default TableMain;
