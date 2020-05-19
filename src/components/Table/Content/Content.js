import React from "react";
import { TableRow } from "./TableRow";

export const Content = ({ companies }) => {
  return (
    <tbody>
      {companies && companies.map(({ ...props }) => <TableRow {...props} />)}
    </tbody>
  );
};
