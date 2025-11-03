import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Text } from "./Text";

test("renders text", () => {
  render(<Text />);
  const textElement = screen.getByText(/Some text/i);
  expect(textElement).toBeInTheDocument();
});

test("color changes when disabled", () => {
  const { rerender } = render(<Text disabled={false} />);
  const textElement = screen.getByText(/Some text/i);
  expect(textElement).toHaveStyle("color: rgb(0, 0, 0)");

  rerender(<Text disabled={true} />);
  expect(textElement).toHaveStyle("color: rgb(128, 128, 128)");
});
