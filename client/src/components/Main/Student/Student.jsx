import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import TableStudent from "./TableStudent/TableStudent";
import SheduleStudent from "./SheduleStudent/SheduleStudent";

const Student = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid
      container
      sx={{
        mt: "100px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Расписание" value="1" />
              <Tab label="Оценки" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <SheduleStudent />
          </TabPanel>
          <TabPanel value="2">
            <TableStudent />
          </TabPanel>
        </TabContext>
      </Box>
    </Grid>
  );
};

export default Student;
