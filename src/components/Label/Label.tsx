import styled from "styled-components";
import type { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  color: ${(props) => (props.disabled ? "grey" : "black")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

export const Label = ({ text = "Label", disabled = false }: LabelProps) => {
  return <StyledLabel disabled={disabled}>{text}</StyledLabel>;
};
