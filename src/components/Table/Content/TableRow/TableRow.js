import React from "react";
import PropTypes from "prop-types";

export const TableRow = (props) => {
  return (
    <tr>
      {Object.values(props).map((value, index) => (
        <td key={new Date().getTime() + index}>{value}</td>
      ))}
    </tr>
  );
};

TableRow.propTypes = {
  props: PropTypes.object,
};
