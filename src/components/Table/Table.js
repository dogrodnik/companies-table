import React from "react";

import { Header } from "./Header";
import { Content } from "./Content";

export const Table = ({
  companiesArray,
  setCompaniesArray,
  companiesToDisplay,
}) => {
  return (
    companiesArray && (
      <div className="table__wrapper">
        <table>
          <Header
            companiesArray={companiesArray}
            setCompaniesArray={setCompaniesArray}
          />
          <Content companies={companiesToDisplay} />
        </table>
      </div>
    )
  );
};
