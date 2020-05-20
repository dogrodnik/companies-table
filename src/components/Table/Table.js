import React, { useEffect, useState } from "react";

import { Content } from "./Content";
import { Header } from "./Header";
import { Pagination } from "../Pagination";
import { Search } from "../Search";

import { useCompaniesFetch } from "../../custom-hooks/useCompaniesFetch";

export const Table = () => {
  const [companiesArray, setCompaniesArray, error] = useCompaniesFetch();
  const [companiesToDisplay, setCompaniesToDisplay] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const COMPANIES_ON_PAGE = 15;

  useEffect(() => {
    if (companiesArray) {
      setPages(Math.ceil(companiesArray.length / COMPANIES_ON_PAGE));
      const companieSlice = companiesArray.slice(
        currentPage * COMPANIES_ON_PAGE,
        currentPage * COMPANIES_ON_PAGE + COMPANIES_ON_PAGE
      );
      setCompaniesToDisplay(companieSlice);
    }
  }, [companiesArray, currentPage]);

  return (
    companiesArray && (
      <>
        <Search
          companiesArray={companiesArray}
          setCompaniesArray={setCompaniesArray}
        />
        <div className="table__wrapper">
          <table>
            <Header
              companiesArray={companiesArray}
              setCompaniesArray={setCompaniesArray}
            />
            <Content companies={companiesToDisplay} />
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pages={pages}
        />
      </>
    )
  );
};
