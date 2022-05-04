import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

const ShowLessonType = ({ anchorEl, handlePopoverClose, lessonTypeText }) => {
  const open = Boolean(anchorEl);
  return (
    <Popover
      id="mouse-over-popover"
      sx={{
        pointerEvents: "none",
      }}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      onClose={handlePopoverClose}
      disableRestoreFocus
    >
      <Typography sx={{ p: 1, minWidth: "150px", textAlign: "center" }}>
        {(lessonTypeText.length > 0 && lessonTypeText[0].lesson_type) ||
          "Тип урока не задан"}
      </Typography>
    </Popover>
  );
};

export default ShowLessonType;
