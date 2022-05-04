import React from "react";
import SelectGroup from "./SelectGroup/SelectGroup";
import Calendar from "./Calendar/Calendar";
import { Box } from "@mui/material";
const NavStatement = ({ setGroup, group, dates, setDates }) => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <SelectGroup setGroup={setGroup} group={group} />
      <Calendar dates={dates} setDates={setDates} />
    </Box>
  );
};

export default NavStatement;
