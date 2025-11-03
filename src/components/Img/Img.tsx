import styled from "styled-components";
import type { ImgProps } from "./Img.types";

const StyledImg = styled.img<ImgProps>`
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

export const Img = ({ src, alt, disabled }: ImgProps) => (
  <StyledImg src={src} alt={alt} disabled={disabled} />
);
