import React from "react";

const TableBody = ({ data }) => {
  const infoStudents = data.map((item, index) => {
    let splitMarks = item.mark.split(",");
    return (
      <tr key={index}>
        <td style={{ border: "1px solid #ccc" }}>
          {index + 1}.{item.surname} {item.name}
        </td>
        {splitMarks.map((mark, i) => {
          return (
            <td key={i} style={{ border: "1px solid #ccc", width: "100px" }}>
              {mark != 0 ? mark : ""}
            </td>
          );
        })}
      </tr>
    );
  });
  return <tbody>{infoStudents}</tbody>;
};

export default TableBody;
