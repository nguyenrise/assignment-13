import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Button } from "./Button";

test("renders button", () => {
  render(<Button />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();
});

test("background color changes when disabled", () => {
  const { rerender } = render(<Button disabled={false} />);
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveStyle("background-color: blue");

  rerender(<Button disabled={true} />);
  expect(buttonElement).toHaveStyle("background-color: grey");
});
