import React from "react";
import PropTypes from "prop-types";

import { Header } from "./Header";
import { Content } from "./Content";

/**
 * Table includes information about companies. It contains Header and Content components.
 */
export const Table = ({ companies, companiesToDisplay, setCompanies }) =>
  companies && (
    <div className="table__wrapper">
      <table>
        <Header companies={companies} setCompanies={setCompanies} />
        <Content companies={companiesToDisplay} />
      </table>
    </div>
  );

Table.propTypes = {
  /** Array of all fetched companies*/
  companies: PropTypes.array,
  /** Array of companies to dispaly, they can be paginated/filtered/corted*/
  companiesToDisplay: PropTypes.array,
  /** Function to set array of comapnies*/
  setCompanies: PropTypes.func,
};
