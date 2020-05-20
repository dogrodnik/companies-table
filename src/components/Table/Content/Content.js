import React from "react";
import PropTypes from "prop-types";

import { TableRow } from "./TableRow";

export const Content = ({ companies }) => {
  return (
    <tbody>
      {companies &&
        companies.map((props, index) => (
          <TableRow key={new Date().getTime() + index} {...props} />
        ))}
    </tbody>
  );
};

Content.propTypes = {
  companies: PropTypes.array,
};
