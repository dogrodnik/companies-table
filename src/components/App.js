import React, { useEffect, useState } from "react";

import { useCompaniesFetch } from "../custom-hooks/useCompaniesFetch";

import { Pagination } from "./Pagination";
import { Search } from "./Search";
import { Table } from "./Table";

function App() {
  const [companiesArray, setCompaniesArray, error] = useCompaniesFetch();
  const [companiesToDisplay, setCompaniesToDisplay] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const ROWS_ON_PAGE = 15;

  useEffect(() => {
    if (companiesArray) {
      setPages(Math.ceil(companiesArray.length / ROWS_ON_PAGE));
      const companieSlice = companiesArray.slice(
        currentPage * ROWS_ON_PAGE,
        currentPage * ROWS_ON_PAGE + ROWS_ON_PAGE
      );
      setCompaniesToDisplay(companieSlice);
    }
  }, [companiesArray, currentPage]);

  return (
    <div className="App">
      <Search
        companiesArray={companiesArray}
        setCompaniesArray={setCompaniesArray}
        setCurrentPage={setCurrentPage}
      />
      <Table
        companiesArray={companiesArray}
        setCompaniesArray={setCompaniesArray}
        companiesToDisplay={companiesToDisplay}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
    </div>
  );
}

export default App;
