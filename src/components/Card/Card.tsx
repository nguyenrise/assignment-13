import styled from "styled-components";
import type { CardProps } from "./Card.types";

const StyledCard = styled.div<CardProps>`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

export const Card = ({ children, disabled }: CardProps) => (
  <StyledCard disabled={disabled}>{children}</StyledCard>
);
