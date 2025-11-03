import styled from "styled-components";
import type {
  TableProps,
  TableHeaderProps,
  TableRowProps,
  TableCellProps,
  TableFooterProps,
} from "./Table.types";

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

const StyledTableHeader = styled.th<TableHeaderProps>`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: left;
`;

const StyledTableRow = styled.tr<TableRowProps>``;

const StyledTableCell = styled.td<TableCellProps>`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: #f2f2f2;
  font-weight: bold;
`;

export const Table = ({ children, disabled }: TableProps) => (
  <StyledTable disabled={disabled}>{children}</StyledTable>
);
export const TableHeader = ({ children }: TableHeaderProps) => (
  <StyledTableHeader>{children}</StyledTableHeader>
);
export const TableRow = ({ children }: TableRowProps) => (
  <StyledTableRow>{children}</StyledTableRow>
);
export const TableCell = ({ children }: TableCellProps) => (
  <StyledTableCell>{children}</StyledTableCell>
);
export const TableFooter = ({ children }: TableFooterProps) => (
  <StyledTableFooter>{children}</StyledTableFooter>
);
