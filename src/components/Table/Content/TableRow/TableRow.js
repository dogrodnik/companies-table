import React from "react";
import PropTypes from "prop-types";

/**
 * TableRow displays single row of table with information about single company
 */

export const TableRow = (props) => (
  <tr>
    {Object.values(props).map((value, index) => (
      <td key={new Date().getTime() + index}>{value}</td>
    ))}
  </tr>
);

TableRow.propTypes = {
  props: PropTypes.shape({
    averageIncome: PropTypes.string,
    city: PropTypes.string,
    id: PropTypes.number,
    lastMonthIncome: PropTypes.string,
    name: PropTypes.string,
    totalIncome: PropTypes.string,
  }),
};
