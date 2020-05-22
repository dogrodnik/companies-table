import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { sort } from "../../../utils/sort";
import { Arrow } from "./Arrow";

/**
 * Component display headers of the table. Also it has sorting by particular header functionality
 */
export const Header = ({ companies, setCompanies }) => {
  const [active, setActive] = useState();
  const [sortType, setSortType] = useState({
    id: false,
    name: false,
    city: false,
    totalIncome: false,
    averageIncome: false,
    lastMonthIncome: false,
  });

  useEffect(() => {
    sortCompanies("id");
    setActive("id");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortCompanies = async (searchType) => {
    const sortedCompanies = await sort(
      companies,
      searchType,
      sortType[searchType]
    );
    setSortType({ ...sortType, [searchType]: !sortType[searchType] });
    setActive(searchType);
    setCompanies([...sortedCompanies]);
  };

  return (
    <thead>
      <tr>
        {Object.keys(sortType).map((key) => (
          <th
            key={key}
            data-field-type={key}
            onClick={({ target }) =>
              sortCompanies(target.getAttribute("data-field-type"))
            }
          >
            {key.split(/(?=[A-Z])/).join(" ")}
            {active === key && <Arrow isAsc={sortType[key]} />}
          </th>
        ))}
      </tr>
    </thead>
  );
};

Header.propTypes = {
  /** Array of companies to sort*/
  companies: PropTypes.array,
  /** Function to save sorted companies*/
  setCompanies: PropTypes.func,
};
