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
    <div style={{ width: "100%", display: "flex" }}>
      <div>{id}</div>
      <div>{name}</div>
      <div>{city}</div>
      <div>{totalIncome}</div>
      <div>{averageIncome}</div>
      <div>{lastMonthIncome}</div>
    </div>
  );
};
