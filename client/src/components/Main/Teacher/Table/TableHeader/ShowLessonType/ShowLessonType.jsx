import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const ShowLessonType = ({ anchorEl, handlePopoverClose, lessonTypeText }) => {
  const open = Boolean(anchorEl);
  return (
    <Popover
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
      <Typography
        component="h6"
        sx={{ p: 1, minWidth: "150px", textAlign: "center" }}
      >
        {lessonTypeText.map((item) => {
          return (
            <Box key={item.shedule_id} display="flex" flexDirection="column">
              {item.lesson_type}
              {item.topic ? ` - ${item.topic}` : ""}
            </Box>
          );
        })}
      </Typography>
    </Popover>
  );
};

export default ShowLessonType;
