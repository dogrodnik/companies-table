import { useEffect, useState } from "react";

import { getCompaniesInfo } from "../utils/getCompaniesInfo";

export const useCompaniesFetch = (setLoading) => {
  const [companiesArray, setCompaniesArray] = useState(null);
  const [error, setError] = useState(null);

  //GET COMPANIES DATA AND ICOMES
  useEffect(() => {
    const fetchData = async () => {
      try {
        const companiesInfo = await getCompaniesInfo();
        setCompaniesArray(companiesInfo);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [setLoading]);

  return [companiesArray, setCompaniesArray, error];
};
