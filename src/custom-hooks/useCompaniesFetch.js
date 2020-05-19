import { useEffect, useState } from "react";

import { getCompaniesInfo } from "../utils/getCompaniesInfo";

export const useCompaniesFetch = () => {
  const [companiesArray, setCompaniesArray] = useState(null);
  const [error, setError] = useState(null);

  //GET COMPANIES DATA AND ICOMES
  useEffect(() => {
    const fetchData = async () => {
      try {
        const companiesInfo = await getCompaniesInfo();
        setCompaniesArray(companiesInfo);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return [companiesArray, setCompaniesArray, error];
};
