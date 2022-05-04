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
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";

const TeacherAccord = ({ handleChange, expanded }) => {
  const navigate = useNavigate();
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <PersonIcon />
        <Typography sx={{ pl: "10px", flexGrow: 1 }}>Учитель</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate("/admin/create-teacher")}>
            <ListItemIcon>
              <CreateIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }} primary="Создать учителя" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/admin/delete-teacher")}>
            <ListItemIcon>
              <DeleteIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }} primary="Удалить учителя" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/admin/edit-teacher")}>
            <ListItemIcon>
              <EditRoadIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }} primary="Изменить учителя" />
          </ListItemButton>
          <ListItemButton
            onClick={() => navigate("/admin/connect-teacher-group")}
          >
            <ListItemIcon>
              <SettingsEthernetIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }} primary="Учитель-группа" />
          </ListItemButton>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default TeacherAccord;
