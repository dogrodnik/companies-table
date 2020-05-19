import React from "react";

export const TableRow = ({
  id,
  name,
  city,
  totalIncome,
  averageIncome,
  lastMonthIncome,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{city}</td>
      <td>{totalIncome}</td>
      <td>{averageIncome}</td>
      <td>{lastMonthIncome}</td>
    </tr>
  );
};
