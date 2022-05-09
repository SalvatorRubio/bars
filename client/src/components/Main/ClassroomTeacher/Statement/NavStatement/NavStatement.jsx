import React from "react";
import SelectGroup from "./SelectGroup/SelectGroup";
import Calendar from "./Calendar/Calendar";
import { Box } from "@mui/material";
import SelectStatement from "./SelectStatement/SelectStatement";
const NavStatement = ({
  setGroup,
  group,
  dates,
  setDates,
  statement,
  setStatement,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      sx={{ width: "100%", mb: 2 }}
    >
      <SelectStatement statement={statement} setStatement={setStatement} />
      {statement && <SelectGroup setGroup={setGroup} group={group} />}
      {statement === "Рубежная аттестация" && (
        <Calendar dates={dates} setDates={setDates} />
      )}
    </Box>
  );
};

export default NavStatement;
