import styled from "styled-components";
import type { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<DropdownProps>`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${(props) => (props.disabled ? "#f2f2f2" : "white")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const Dropdown = ({ options, disabled }: DropdownProps) => (
  <StyledSelect disabled={disabled} options={options}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </StyledSelect>
);
