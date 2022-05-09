import React from "react";
import SelectGroup from "./SelectGroup/SelectGroup";
import Calendar from "./Calendar/Calendar";
import { Box } from "@mui/material";
const NavJournal = ({ setGroup, group, dates, setDates }) => {
  return (
    <Box display="flex" sx={{ width: "100%", mb: 2 }}>
      <SelectGroup setGroup={setGroup} group={group} />
      <Calendar dates={dates} setDates={setDates} />
    </Box>
  );
};

export default NavJournal;
