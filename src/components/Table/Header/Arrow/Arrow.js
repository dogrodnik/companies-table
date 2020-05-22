import React from "react";
import PropTypes from "prop-types";
import arrowDown from "../../../../assets/arrow-down.png";
import arrowUp from "../../../../assets/arrow-up.png";

/**
 * Arrow show if filter is ascending or descending order.
 */
export const Arrow = ({ isAsc }) => {
  return isAsc ? (
    <img src={arrowDown} alt="down" />
  ) : (
    <img src={arrowUp} alt="down" />
  );
};

Arrow.propTypes = {
  /** Determines direction of the arrow*/
  isAsc: PropTypes.bool,
};
