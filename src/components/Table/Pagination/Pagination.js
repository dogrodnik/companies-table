import React from "react";

export const Pagination = ({ currentPage, setCurrentPage, pages }) => {
  console.log(currentPage);

  const pageDown = () => {
    if (currentPage > 0) setCurrentPage((prevPage) => prevPage - 1);
  };

  const pageUp = () => {
    if (currentPage + 1 < pages) setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <button onClick={() => pageDown()}>Previous</button>
      <div>{`${currentPage + 1}/${pages}`}</div>
      <button onClick={() => pageUp()}>Next</button>
    </div>
  );
};
