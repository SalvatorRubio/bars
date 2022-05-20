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
import AssignmentIcon from "@mui/icons-material/Assignment";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import { useNavigate } from "react-router-dom";

const DisciplineAccord = ({ handleChange, expanded }) => {
  const navigate = useNavigate();
  return (
    <Accordion
      expanded={expanded === "panel4"}
      onChange={handleChange("panel4")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel4bh-content"
        id="panel4bh-header"
      >
        <AssignmentIcon />
        <Typography sx={{ flexGrow: 1, pl: "10px" }}>Учебный план</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate("/admin/academic-plan")}>
            <ListItemIcon>
              <CreateIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: "black" }}
              primary="Создать учебный план"
            />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/admin/create-discipline")}>
            <ListItemIcon>
              <AddIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: "black" }}
              primary="Создать доп. дисциплину"
            />
          </ListItemButton>

          <ListItemButton onClick={() => navigate("/admin/edit-discipline")}>
            <ListItemIcon>
              <AddRoadIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: "black" }}
              primary="Изменить дисциплину"
            />
          </ListItemButton>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default DisciplineAccord;
