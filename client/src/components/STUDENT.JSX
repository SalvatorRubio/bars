const date = data.map((item, i) => {
  let splitItems = item.cur_date.split(",");
  return splitItems.map((splitItem, index) => {
    return (
      <th key={index} style={{ border: "1px solid black" }}>
        {splitItem}
      </th>
    );
  });
});

const memoizedValue = useMemo(() => date, [date]);

const marksAndLessons = data.map((row, i) => {
  let splitMarks = row.mark.split(",");
  return (
    <tr key={i}>
      <td style={{ border: "1px solid #ccc" }}>{row.name}</td>
      {splitMarks.map((mark, index) => {
        return (
          <td style={{ border: "1px solid #ccc" }} key={index}>
            {mark}
          </td>
        );
      })}
    </tr>
  );
});
return (
  <main className={classes.main}>
    <table>
      <thead>
        <tr>
          <th>Название предмета</th>
          {memoizedValue}
        </tr>
      </thead>
      <tbody>{marksAndLessons}</tbody>
    </table>
  </main>
);
