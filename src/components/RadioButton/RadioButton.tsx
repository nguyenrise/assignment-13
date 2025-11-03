import styled from "styled-components";
import type { RadioButtonProps } from "./RadioButton.types";

const StyledLabel = styled.label<RadioButtonProps>`
  color: ${(props) => (props.disabled ? "grey" : "black")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const StyledInput = styled.input.attrs({ type: "radio" })<RadioButtonProps>`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const RadioButton = ({ label, disabled }: RadioButtonProps) => (
  <StyledLabel disabled={disabled} label={label}>
    <StyledInput disabled={disabled} label={label} />
    {label}
  </StyledLabel>
);
