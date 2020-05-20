import React from "react";
import errorIcon from "../../assets/error.png";

export const ErrorScreen = () => {
  return (
    <div className="error">
      <img src={errorIcon} alt="error" />
      <p>Something went wrong...</p>
      <p>Try again later</p>
    </div>
  );
};