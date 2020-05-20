import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

export const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <BounceLoader color={"#6c7ae0"} size={75} />
      <p>Loading</p>
    </div>
  );
};
