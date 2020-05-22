import React, { useEffect, useState } from "react";

import { useCompaniesFetch } from "../custom-hooks/useCompaniesFetch";

import { ErrorScreen } from "./ErrorScreen";
import { Information } from "./Information";
import { LoadingScreen } from "./LoadingScreen";
import { Pagination } from "./Pagination";
import { Search } from "./Search";
import { Table } from "./Table";

/**
 * Main component of application.
 * It fetches data from api, contain main state of application and pass it to components
 */
function App() {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies, error] = useCompaniesFetch(setLoading);
  const [companiesToDisplay, setCompaniesToDisplay] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const ROWS_ON_PAGE = 15;

  useEffect(() => {
    if (companies) {
      setPages(Math.ceil(companies.length / ROWS_ON_PAGE));
      const companieSlice = companies.slice(
        currentPage * ROWS_ON_PAGE,
        currentPage * ROWS_ON_PAGE + ROWS_ON_PAGE
      );
      setCompaniesToDisplay(companieSlice);
    }
  }, [companies, currentPage]);

  if (error) return <ErrorScreen />;
  if (loading) return <LoadingScreen />;

  return (
    <div className="App">
      <Search
        companies={companies}
        setCompanies={setCompanies}
        setCurrentPage={setCurrentPage}
      />
      {companies.length ? (
        <>
          <Table
            companies={companies}
            setCompanies={setCompanies}
            companiesToDisplay={companiesToDisplay}
          />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pages={pages}
          />
        </>
      ) : (
        <Information />
      )}
    </div>
  );
}

export default App;
