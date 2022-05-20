import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ClassApi } from "../../ClassesApi/ClassApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

const Login = () => {
  const [login, setLogin] = useState("");
  const navigate = useNavigate();
  const { singin, setGroup } = useAuth();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  const handelClick = (e) => {
    e.preventDefault();
    ClassApi.authorization(login, password).then((res) => {
      if (res.length === 0) {
        setStatus(true);
        setPassword("");
        setLogin("");
      } else {
        setStatus(false);
        const {
          role,
          name,
          surname,
          father_name,
          teacher_id,
          admin_id,
          student_id,
          groups_id,
        } = res[0];
        switch (role) {
          case "1":
            sessionStorage.setItem("userName", `${surname} ${name} `);
            sessionStorage.setItem("role", role);
            sessionStorage.setItem("id", admin_id);

            return singin(`${surname} ${name} `, admin_id, role, () =>
              navigate("/admin", { replace: true })
            );
          case "2":
            sessionStorage.setItem(
              "userName",
              `${surname} ${name} ${father_name}`
            );
            sessionStorage.setItem("role", role);
            sessionStorage.setItem("id", teacher_id);
            return singin(
              `${surname} ${name} ${father_name}`,
              teacher_id,
              role,
              () => navigate("/teacher", { replace: true })
            );
          case "3":
            sessionStorage.setItem(
              "userName",
              `${surname} ${name} ${father_name}`
            );
            sessionStorage.setItem("group", groups_id);
            sessionStorage.setItem("role", role);
            sessionStorage.setItem("id", student_id);
            setGroup(groups_id);
            return singin(
              `${surname} ${name} ${father_name}`,
              student_id,
              role,
              () => navigate("/student", { replace: true })
            );
          case "4":
            sessionStorage.setItem(
              "userName",
              `${surname} ${name} ${father_name}`
            );
            sessionStorage.setItem("role", role);
            sessionStorage.setItem("id", teacher_id);

            return singin(`${surname} ${name}`, teacher_id, role, () =>
              navigate("/classroom-teacher", { replace: true })
            );
          default:
            return setStatus(true);
        }
      }
    });
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      component="form"
      sx={{ height: "100vh" }}
    >
      <Typography variant="h5">Авторизируйтесь</Typography>
      <Box
        display="flex"
        alignItems="center"
        sx={{ width: "600px", m: "10px 0" }}
      >
        <Typography sx={{ width: "200px" }} variant="p">
          Введите логин
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Логин</InputLabel>
          <OutlinedInput
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            label="Логин"
          />
        </FormControl>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        sx={{ width: "600px", m: "10px 0" }}
      >
        <Typography sx={{ width: "200px" }} variant="p">
          Введите пароль
        </Typography>
        <FormControl fullWidth>
          <InputLabel>Пароль</InputLabel>
          <OutlinedInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            type="password"
            label="Пароль"
          />
        </FormControl>
      </Box>
      {status && (
        <Typography sx={{ color: "red" }}>
          Неправильно введен логин или пароль!
        </Typography>
      )}
      <Box display="flex" justifyContent="flex-end" sx={{ width: " 600px" }}>
        <Button onClick={handelClick} variant="contained">
          Войти
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
