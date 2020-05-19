import React from "react";
import { TableRow } from "./TableRow";

export const Content = ({ companies }) => {
  return companies && companies.map(({ ...props }) => <TableRow {...props} />);
};
