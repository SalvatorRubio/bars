import React, { useEffect, useState } from "react";
import Api from "../../../../ClassApi";
import TableBody from "./TableBody/TableBody";
import TableHeader from "./TableHeader/TableHeader";

const TeacherMain = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Api.selectStudentAndMarksForTeacher().then((res) => setData(res));
  }, []);
  return (
    <table>
      <TableHeader data={data} />
      <TableBody data={data} />
    </table>
  );
};

export default TeacherMain;
