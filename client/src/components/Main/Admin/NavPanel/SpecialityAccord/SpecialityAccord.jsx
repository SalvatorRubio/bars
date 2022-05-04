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
import WorkIcon from "@mui/icons-material/Work";
import CreateIcon from "@mui/icons-material/Create";
import { useNavigate } from "react-router-dom";

const SpecialityAccord = ({ handleChange, expanded }) => {
  const navigate = useNavigate();
  return (
    <Accordion
      expanded={expanded === "panel6"}
      onChange={handleChange("panel6")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel6bh-content"
        id="panel6bh-header"
      >
        <WorkIcon />
        <Typography sx={{ flexGrow: 1, pl: "10px" }}>Специальность</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List component="div" disablePadding>
          <ListItemButton onClick={() => navigate("/admin/create-speciality")}>
            <ListItemIcon>
              <CreateIcon sx={{ color: "black" }} />
            </ListItemIcon>
            <ListItemText
              sx={{ color: "black" }}
              primary="Создать специальность"
            />
          </ListItemButton>
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default SpecialityAccord;
