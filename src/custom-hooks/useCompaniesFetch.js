import { useEffect, useState } from "react";

import { getCompaniesInfo } from "../utils/getCompaniesInfo";

export const useCompaniesFetch = () => {
  const [companiesData, setCompaniesData] = useState(null);
  const [error, setError] = useState(null);

  //FETCH COMPANIES DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const companiesInfo = await getCompaniesInfo();
        setCompaniesData(companiesInfo);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(companiesData);
  });

  return { companiesData, error };
};
