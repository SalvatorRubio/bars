import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ClassTeacher } from "../../../../../../ClassesApi/ClassroomTeacher";
import { useAuth } from "../../../../../../hook/useAuth";

const SelectGroup = ({ group, setGroup }) => {
  const [groupsArr, setGroupsArr] = useState([]);
  const { id } = useAuth();
  useEffect(() => {
    ClassTeacher.getGroups(id).then((res) => setGroupsArr(res));
  }, [id]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "300px",
      }}
    >
      <Typography
        sx={{ width: "100%", maxWidth: "300px", textAlign: "center" }}
        variant="p"
      >
        Выберите группу
      </Typography>
      <FormControl fullWidth sx={{ mt: 1 }}>
        <InputLabel>Группа</InputLabel>
        <Select
          value={group}
          label="Группа"
          onChange={(e) => {
            setGroup(e.target.value);
            sessionStorage.setItem("group", e.target.value);
          }}
        >
          {groupsArr.map((item) => {
            return (
              <MenuItem key={item.groups_id} value={item.groups_id}>
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
