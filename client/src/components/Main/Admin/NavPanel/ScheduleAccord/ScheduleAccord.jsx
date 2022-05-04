import React from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CreateIcon from "@mui/icons-material/Create";

const ScheduleAccord = ({ handleChange, expanded }) => {
  const navigate = useNavigate();

  return (
    <Accordion
      expanded={expanded === "panel7"}
      onChange={handleChange("panel7")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel7bh-content"
        id="panel7bh-header"
      >
        <CalendarTodayIcon />
        <Typography sx={{ pl: "10px", flexGrow: 1 }}>
          Расписание на день
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate("/admin/create-shedule")}>
            <ListItemIcon>
              <CreateIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText
              primary="Создать расписание"
              sx={{ color: "black" }}
            />
          </ListItemButton>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default ScheduleAccord;
