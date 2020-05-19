import React from "react";

export const Pagination = ({ currentPage, setCurrentPage, pages }) => {
  console.log(currentPage);
  return (
    <div>
      <button onClick={() => setCurrentPage((prevPage) => prevPage - 1)}>
        Previous
      </button>
      <div>{`${currentPage + 1}/${pages}`}</div>
      <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
        Next
      </button>
    </div>
  );
};
