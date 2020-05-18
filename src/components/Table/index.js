import React from "react";

import { Content } from "./Content";
import { Header } from "./Header";
import { Pagination } from "./Pagination";
import { Search } from "./Search";

export const Table = () => {
  return (
    <div>
      <Search />
      <Header />
      <Content />
      <Pagination />
    </div>
  );
};
