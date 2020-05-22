import React from "react";
import loupeIcon from "../../assets/loupe.png";

/**
 * This component is used to display information about results of filtering.
 */
export const Information = () => (
  <div className="information">
    <img src={loupeIcon} alt="information" />
    <p>Nothing found...</p>
    <p>Please try again with other terms</p>
  </div>
);
