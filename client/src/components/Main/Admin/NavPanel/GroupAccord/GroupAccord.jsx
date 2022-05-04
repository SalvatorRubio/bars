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
import GroupsIcon from "@mui/icons-material/Groups";
import CreateIcon from "@mui/icons-material/Create";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useNavigate } from "react-router-dom";

const GroupAccord = ({ handleChange, expanded }) => {
  const navigate = useNavigate();
  return (
    <Accordion
      expanded={expanded === "panel3"}
      onChange={handleChange("panel3")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3bh-content"
        id="panel3bh-header"
      >
        <GroupsIcon />
        <Typography sx={{ flexGrow: 1, pl: "10px" }}>Группа</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate("create-group")}>
            <ListItemIcon>
              <CreateIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }} primary="Создать группу" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("release-group")}>
            <ListItemIcon>
              <BeenhereIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }} primary="Удалить группу" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("edit-group")}>
            <ListItemIcon>
              <GroupAddIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }} primary="Изменить группу" />
          </ListItemButton>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default GroupAccord;
