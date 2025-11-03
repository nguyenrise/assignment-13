import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Table, TableHeader, TableRow, TableCell } from "./Table";

test("renders table", () => {
  render(
    <Table>
      <thead>
        <TableRow>
          <TableHeader>Header</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        <TableRow>
          <TableCell>Data</TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
  const tableElement = screen.getByRole("table");
  expect(tableElement).toBeInTheDocument();
});

test("table is greyed out when disabled", () => {
  render(
    <Table disabled>
      <tbody>
        <TableRow>
          <TableCell>Data</TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
  const tableElement = screen.getByRole("table");
  expect(tableElement).toHaveStyle("opacity: 0.5");
});
