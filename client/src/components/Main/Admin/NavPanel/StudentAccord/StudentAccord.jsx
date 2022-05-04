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
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const StudentAccord = ({ handleChange, expanded }) => {
  const navigate = useNavigate();
  return (
    <Accordion
      expanded={expanded === "panel2"}
      onChange={handleChange("panel2")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
      >
        <PersonIcon />
        <Typography sx={{ flexGrow: 1, pl: "10px" }}>Студент</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate("/admin/create-student")}>
            <ListItemIcon>
              <CreateIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText sx={{ color: "black" }} primary="Создать студента" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/admin/restore-student")}>
            <ListItemIcon>
              <AddRoadIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: "black" }}
              primary="Восстановить студента"
            />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/admin/delete-student")}>
            <ListItemIcon>
              <DeleteIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: "black" }}
              primary="Отчислить студента"
            />
          </ListItemButton>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default StudentAccord;
