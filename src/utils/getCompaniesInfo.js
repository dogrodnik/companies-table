import { getCompanies, getCompanyDetails } from "./axios";

export const getCompaniesInfo = async () => {
  const response = await getCompanies();
  const companiesData = await response.data.map(async ({ id, ...rest }) => {
    const response = await getCompanyDetails(id);
    return { id, incomes: response.data.incomes, ...rest };
  });
  const companiesWithIncomes = await Promise.all(companiesData).then(
    (values) => values
  );
  return companiesWithIncomes.map(({ incomes, ...rest }) => {
    const incomesNumber = incomes.length;
    const totalIncome = getTotalIncome(incomes);
    const lastMonthIncome = getLastMonthIncome(incomes);
    const averageIncome = totalIncome / incomesNumber;

    return {
      ...rest,
      totalIncome: totalIncome.toFixed(2),
      averageIncome: averageIncome.toFixed(2),
      lastMonthIncome: lastMonthIncome.toFixed(2),
    };
  });
};

const getTotalIncome = (incomes) =>
  incomes.reduce((sum, income) => sum + parseFloat(income.value), 0);

//LAST MONTH INCOME FROM AVAILABLE DATES
const getLastMonthIncome = (incomes) => {
  return incomes
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .filter((income, index, incomes) => {
      const lastMonthDate = new Date(Date.parse(incomes[0].date));
      const incomeDate = new Date(Date.parse(income.date));
      return (
        lastMonthDate.getFullYear() === incomeDate.getFullYear() &&
        lastMonthDate.getMonth() === incomeDate.getMonth()
      );
    })
    .reduce((sum, income) => sum + parseFloat(income.value), 0);
};
