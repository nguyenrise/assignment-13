import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Label } from "./Label";

test("renders label", () => {
  render(<Label />);
  const labelElement = screen.getByText(/Label/i);
  expect(labelElement).toBeInTheDocument();
});

test("color changes when disabled", () => {
  const { rerender } = render(<Label disabled={false} />);
  const labelElement = screen.getByText(/Label/i);
  expect(labelElement).toHaveStyle("color: rgb(0, 0, 0)");

  rerender(<Label disabled={true} />);
  expect(labelElement).toHaveStyle("color: rgb(128, 128, 128)");
});
