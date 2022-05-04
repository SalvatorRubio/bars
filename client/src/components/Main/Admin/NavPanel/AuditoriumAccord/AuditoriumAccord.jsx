import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RoomIcon from "@mui/icons-material/Room";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const AuditoriumAccord = ({ handleChange, expanded }) => {
  const navigate = useNavigate();
  return (
    <Accordion
      expanded={expanded === "panel5"}
      onChange={handleChange("panel5")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel5bh-content"
        id="panel5bh-header"
      >
        <RoomIcon />
        <Typography sx={{ flexGrow: 1, pl: "10px" }}>Аудитория</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate("/admin/create-auditorium")}>
            <ListItemIcon>
              <CreateIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }} primary="Создать аудиторию" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/admin/delete-auditorium")}>
            <ListItemIcon>
              <DeleteIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }} primary="Удалить аудиторию" />
          </ListItemButton>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default AuditoriumAccord;
