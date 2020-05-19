import React, { useEffect } from "react";

import { Content } from "./Content";
import { Header } from "./Header";
import { Pagination } from "./Pagination";
import { Search } from "./Search";

import { useCompaniesFetch } from "../../custom-hooks/useCompaniesFetch";

export const Table = () => {
  const { companies, error } = useCompaniesFetch();

  useEffect(() => {
    console.log(companies);
  }, [companies]);

  return (
    <div>
      <Search />
      <Header />
      <Content />
      <Pagination />
    </div>
  );
};
