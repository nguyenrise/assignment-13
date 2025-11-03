import styled from "styled-components";
import type { HeroImageProps } from "./HeroImage.types";

const StyledHeroImage = styled.img<HeroImageProps>`
  width: 100%;
  height: auto;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

export const HeroImage = ({ src, alt, disabled }: HeroImageProps) => (
  <StyledHeroImage src={src} alt={alt} disabled={disabled} />
);
