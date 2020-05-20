import React from "react";
import loupeIcon from "../../assets/loupe.png";

export const Information = () => {
  return (
    <div className="information">
      <img src={loupeIcon} alt="information" />
      <p>Nothing found...</p>
      <p>Please try again with other terms</p>
    </div>
  );
};
