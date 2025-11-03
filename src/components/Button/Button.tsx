import styled from "styled-components";
import type { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.disabled ? "grey" : props.backgroundColor || "blue"};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const Button = ({
  text = "Button",
  backgroundColor,
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};
