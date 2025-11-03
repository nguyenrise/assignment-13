import styled from "styled-components";
import type { TextProps } from "./Text.types";

const StyledText = styled.p<TextProps>`
  color: ${(props) => (props.disabled ? "grey" : "black")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

export const Text = ({
  content = "Some text",
  disabled = false,
}: TextProps) => {
  return <StyledText disabled={disabled}>{content}</StyledText>;
};
