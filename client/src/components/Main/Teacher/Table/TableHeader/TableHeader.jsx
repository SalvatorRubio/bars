import { TableCell, TableHead, TableRow } from "@mui/material";
import React, { useState, useEffect } from "react";
import { TeacherApi } from "../../../../../ClassesApi/TeacherApi";
import { useAuth } from "../../../../../hook/useAuth";

import ModalTypeLesson from "./ModalTypeLesson/ModalTypeLesson";
import ShowLessonType from "./ShowLessonType/ShowLessonType";

const TableHeader = (props, { middleMarksByTypes, setMiddleMarksByTypes }) => {
  const [columnsDate, setColumnsDate] = useState([]);
  const { dates, discipline, lessonType } = props.item;
  const { id, group } = useAuth();
  const [openModal, setOpenModal] = useState(false);
  const [shedule, setShedule] = useState();
  const [date, setDate] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  // При наведении мышки показывать тип урока, который был
  const [lessonTypeText, setLessonTypeText] = useState([]);
  useEffect(() => {
    TeacherApi.getDates(
      id,
      group,
      discipline,
      lessonType,
      dates[0],
      dates[1]
    ).then((res) => {
      setColumnsDate(res);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dates, discipline, lessonType]);

  const handleOpen = (date, id) => {
    setOpenModal(true);
    setShedule(id);
    setDate(date);
  };

  const handlePopoverOpen = (event, id) => {
    setAnchorEl(event.currentTarget);

    TeacherApi.getLessonType(id).then((res) => {
      setLessonTypeText(res);
    });
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell sx={{ maxWidth: "215px" }}>Учащийся</TableCell>
          {columnsDate.map((item) => {
            return (
              <TableCell
                onClick={() => handleOpen(item.cur_date, item.shedule_id)}
                onMouseEnter={(e) => handlePopoverOpen(e, item.shedule_id)}
                onMouseLeave={handlePopoverClose}
                sx={{ cursor: "pointer" }}
                align="center"
                key={item.shedule_id}
              >
                {item.cur_date.slice(0, -5)}
              </TableCell>
            );
          })}

          <ShowLessonType
            handlePopoverOpen={handlePopoverOpen}
            handlePopoverClose={handlePopoverClose}
            anchorEl={anchorEl}
            lessonTypeText={lessonTypeText}
          />
          <TableCell
            sx={{
              textAlign: "center",
              borderLeft: "1px solid #ccc",
              p: "0px",
              width: "150px",
            }}
          >
            Средняя оценка
          </TableCell>
        </TableRow>
      </TableHead>

      <ModalTypeLesson
        columnsDate={columnsDate}
        open={openModal}
        setOpen={setOpenModal}
        shedule={shedule}
        date={date}
      />
    </>
  );
};

export default TableHeader;
