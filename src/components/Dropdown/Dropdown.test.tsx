import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Dropdown } from "./Dropdown";

const options = ["Option 1", "Option 2"];

test("renders dropdown", () => {
  render(<Dropdown options={options} />);
  const dropdownElement = screen.getByRole("combobox");
  expect(dropdownElement).toBeInTheDocument();
});

test("background color changes when disabled", () => {
  const { rerender } = render(<Dropdown options={options} disabled={false} />);
  const dropdownElement = screen.getByRole("combobox");
  expect(dropdownElement).toHaveStyle("background-color: white");

  rerender(<Dropdown options={options} disabled={true} />);
  expect(dropdownElement).toHaveStyle("background-color: #f2f2f2");
});
