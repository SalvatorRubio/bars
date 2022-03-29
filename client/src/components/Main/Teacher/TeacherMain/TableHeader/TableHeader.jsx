import React from "react";

const TableHeader = ({ data }) => {
  const dates = data.map((date) => {
    let splitDates = date.cur_date.split(",");
    return splitDates.map((item, i) => {
      return (
        <th key={i} style={{ border: "1px solid #000" }}>
          {item}
        </th>
      );
    });
  });
  return (
    <thead>
      <tr>
        <th>Учащийся</th>
        {dates}
      </tr>
    </thead>
  );
};

export default TableHeader;
