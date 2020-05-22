//SORT FUNCTINS FOR THE HEADERS SORTING
export const sort = (companies, searchType, isAscending) =>
  searchType === "name" || searchType === "city"
    ? sortStrings(companies, searchType, isAscending)
    : sortNumbers(companies, searchType, isAscending);

const sortNumbers = (companies, searchType, isAscending) =>
  isAscending
    ? companies.sort(
        (a, b) => parseFloat(b[searchType]) - parseFloat(a[searchType])
      )
    : companies.sort((a, b) =>
        parseFloat(a[searchType] - parseFloat(b[searchType]))
      );

const sortStrings = (companies, searchType, isAscending) =>
  isAscending
    ? companies.sort((a, b) => {
        if (b[searchType] < a[searchType]) {
          return -1;
        }
        if (b[searchType] > a[searchType]) {
          return 1;
        }
        return 0;
      })
    : companies.sort((a, b) => {
        if (a[searchType] < b[searchType]) {
          return -1;
        }
        if (a[searchType] > b[searchType]) {
          return 1;
        }
        return 0;
      });
