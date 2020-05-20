import React from "react";

import { Header } from "./Header";
import { Content } from "./Content";

export const Table = ({ companies, setCompanies, companiesToDisplay }) => {
  return (
    companies && (
      <div className="table__wrapper">
        <table>
          <Header companies={companies} setCompanies={setCompanies} />
          <Content companies={companiesToDisplay} />
        </table>
      </div>
    )
  );
};
