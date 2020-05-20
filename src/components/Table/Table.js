import React from "react";
import PropTypes from "prop-types";

import { Header } from "./Header";
import { Content } from "./Content";

export const Table = ({ companies, companiesToDisplay, setCompanies }) => {
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

Table.propTypes = {
  companies: PropTypes.array,
  companiesToDisplay: PropTypes.array,
  setCompanies: PropTypes.func,
};
