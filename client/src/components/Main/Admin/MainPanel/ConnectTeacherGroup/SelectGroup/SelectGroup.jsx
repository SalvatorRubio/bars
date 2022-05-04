import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AdminApi } from "../../../../../../ClassesApi/AdminApi";

const SelectGroup = ({ group, setGroup, setCourse }) => {
  const [groupsArr, setGroupsArr] = useState([]);
  useEffect(() => {
    AdminApi.getGroups().then((res) => setGroupsArr(res));
  }, []);

  const handleClick = (id) => {
    setCourse(id);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", m: "10px 0" }}>
      <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
        Выберите группу
      </Typography>
      <FormControl fullWidth>
        <InputLabel>Группа</InputLabel>
        <Select
          value={group}
          label="Группа"
          onChange={(e) => {
            setGroup(e.target.value);
          }}
        >
          {groupsArr.map((item) => {
            return (
              <MenuItem
                key={item.groups_id}
                onClick={() => handleClick(item.course)}
                value={item.groups_id}
              >
                {item.course}
                {item.name}
                {item.number}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectGroup;
