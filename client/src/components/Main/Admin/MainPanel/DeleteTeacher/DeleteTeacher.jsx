import { Box, Typography, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useEffect, useState } from "react";
import { AdminApi } from "../../../../../ClassesApi/AdminApi";
import ModalDelete from "./ModalDelete/ModalDelete";

const DeleteTeacher = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [teachersArr, setTeachersArr] = useState([]);
  const [teacher, setTeacher] = useState("");

  useEffect(() => {
    AdminApi.getTeachers().then((res) => setTeachersArr(res));
  }, []);
  const handleOpen = () => {
    if (teacher) setOpen(true);
  };

  const handleChange = (e) => {
    setTeacher(e.target.value);
  };

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ width: "100%", mb: 2, textAlign: "center" }}
      >
        Удаление учителя
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", m: "5px 0" }}>
        <Typography sx={{ width: "100%", maxWidth: "250px" }} variant="p">
          Выберите учителя
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Учитель</InputLabel>
          <Select value={teacher} label="Учитель" onChange={handleChange}>
            {teachersArr.map((item) => {
              return (
                <MenuItem key={item.teacher_id} value={item.teacher_id}>
                  {item.surname} {item.name} {item.father_name}{" "}
                  {Number(item.type) === 0
                    ? "Преподователь"
                    : "Кл. руководитель"}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          mt: "20px",
        }}
      >
        <Button onClick={handleOpen} variant="contained" color="error">
          Удалить учителя
        </Button>
      </Box>
      <ModalDelete
        open={open}
        setOpen={setOpen}
        teacher={teacher}
        setTeacher={setTeacher}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default DeleteTeacher;
