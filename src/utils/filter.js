export const filterCompanies = async (companies, term) =>
  await companies.filter((company) => {
    for (let key in company) {
      if (company[key].toString().toLowerCase().includes(term.toLowerCase())) {
        return true;
      }
    }
    return false;
  });
