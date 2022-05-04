import React, { useState } from "react";
import { Typography, TextField } from "@mui/material";

const Pair = ({ setPair }) => {
  const [isCorrect, setCorrect] = useState(false);
  const [value, setValue] = useState("");
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleChange = (e) => {
    if (e.target.value !== "" && nums.includes(Number(e.target.value))) {
      setCorrect(false);
      setPair(e.target.value);
      setValue(e.target.value);
    } else {
      setCorrect(true);
      setValue(e.target.value);
    }
  };
  return (
    <>
      <Typography
        sx={{ width: "100%", textAlign: "center", maxWidth: "200px" }}
        variant="p"
      >
        Введите номер пары
      </Typography>
      {isCorrect ? (
        <TextField onChange={handleChange} error label="Пара" value={value} />
      ) : (
        <TextField onChange={handleChange} value={value} label="Пара" />
      )}
    </>
  );
};

export default Pair;
