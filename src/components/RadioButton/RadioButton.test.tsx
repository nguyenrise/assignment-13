import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { RadioButton } from "./RadioButton";

test("renders radio button", () => {
  render(<RadioButton label="Radio" />);
  const radioElement = screen.getByRole("radio");
  expect(radioElement).toBeInTheDocument();
});

test("is disabled", () => {
  render(<RadioButton label="Radio" disabled />);
  const radioElement = screen.getByRole("radio");
  expect(radioElement).toBeDisabled();
});
