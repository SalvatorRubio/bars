import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";
import { TeacherApi } from "../../../../ClassesApi/TeacherApi";
import { useAuth } from "../../../../hook/useAuth";

const useStyles = makeStyles({
  formControl: {
    minWidth: 175,
    marginLeft: 10,
    marginTop: "8px",
  },
  select: {
    borderRadius: 5,
  },
});

const SelectGrops = ({ setDiscipline }) => {
  const { setGroup, id, group } = useAuth();
  const [groupsList, setGroupsList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    TeacherApi.getGroups(id).then((res) => {
      setGroupsList(res);
      setLoading(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = useStyles();

  const handleChange = (e) => {
    sessionStorage.setItem("group", e.target.value);
    setGroup(e.target.value);
    sessionStorage.setItem("discipline", "");
    setDiscipline("");
  };

  return (
    <Grid
      justifyContent="center"
      direction="column"
      sx={{ maxWidth: "175px", padding: "0 0 10px 0" }}
      container
    >
      <Typography variant="h6" sx={{ fontWeight: 400, fontSize: "15px" }}>
        Выберите группу:
      </Typography>

      <FormControl className={classes.formControl}>
        <InputLabel>Группы</InputLabel>
        {isLoading && (
          <Select
            className={classes.select}
            value={group}
            onChange={handleChange}
            label="Группы"
          >
            {groupsList.map((item) => {
              return (
                <MenuItem key={item.groups_id} value={item.groups_id}>
                  {item.course}
                  {item.name}
                  {item.number}
                </MenuItem>
              );
            })}
          </Select>
        )}
      </FormControl>
    </Grid>
  );
};

export default SelectGrops;
