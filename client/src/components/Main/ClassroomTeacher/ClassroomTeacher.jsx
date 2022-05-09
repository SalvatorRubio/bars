import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import Statement from "./Statement/Statement";
import { useNavigate } from "react-router-dom";
import Journal from "./Journal/Journal";

const ClassroomTeacher = () => {
  const [value, setValue] = useState("1");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        pt: "100px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <TabList onChange={handleChange}>
            <Tab
              onClick={() => navigate("")}
              label="Ведомости"
              sx={{ m: "0 10px" }}
              value="1"
            />
            <Tab
              onClick={() => navigate("")}
              label="Журнал"
              sx={{ m: "0 10px" }}
              value="2"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Statement />
        </TabPanel>
        <TabPanel value="2">
          <Journal />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default ClassroomTeacher;
