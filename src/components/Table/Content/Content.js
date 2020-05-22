import React from "react";
import PropTypes from "prop-types";

import { TableRow } from "./TableRow";

/**
 * Content component is used to render all of table rows
 */

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
  /** Array of companies to display*/
  companies: PropTypes.array,
};
