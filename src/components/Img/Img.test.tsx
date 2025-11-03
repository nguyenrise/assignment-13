import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Img } from "./Img";

const src = "https://via.placeholder.com/150";
const alt = "Placeholder";

test("renders image", () => {
  render(<Img src={src} alt={alt} />);
  const imgElement = screen.getByRole("img");
  expect(imgElement).toBeInTheDocument();
});

test("is greyed out when disabled", () => {
  render(<Img src={src} alt={alt} disabled />);
  const imgElement = screen.getByRole("img");
  expect(imgElement).toHaveStyle("opacity: 0.5");
});
