import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { HeroImage } from "./HeroImage";

const src = "https://via.placeholder.com/800x400";
const alt = "Hero Image";

test("renders hero image", () => {
  render(<HeroImage src={src} alt={alt} />);
  const heroImageElement = screen.getByRole("img");
  expect(heroImageElement).toBeInTheDocument();
});

test("is greyed out when disabled", () => {
  render(<HeroImage src={src} alt={alt} disabled />);
  const heroImageElement = screen.getByRole("img");
  expect(heroImageElement).toHaveStyle("opacity: 0.5");
});
