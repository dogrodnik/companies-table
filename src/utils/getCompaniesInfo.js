import { getCompanies, getCompanyDetails } from "./axios";

export const getCompaniesInfo = async () => {
  const response = await getCompanies();
  const companiesWithIncomes = await response.data.map(
    async ({ id, ...rest }) => {
      const response = await getCompanyDetails(id);
      return { id, incomes: response.data.incomes, ...rest };
    }
  );
  return Promise.all(companiesWithIncomes).then((values) => values);
};
