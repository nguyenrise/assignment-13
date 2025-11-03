import type { ReactNode } from "react";

export interface TableProps {
  children: ReactNode;
  disabled?: boolean;
}

export interface TableHeaderProps {
  children: ReactNode;
  disabled?: boolean;
}

export interface TableRowProps {
  children: ReactNode;
  disabled?: boolean;
}

export interface TableCellProps {
  children: ReactNode;
  disabled?: boolean;
}

export interface TableFooterProps {
  children: ReactNode;
  disabled?: boolean;
}
