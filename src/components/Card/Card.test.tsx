import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Card } from "./Card";
import { Text } from "../Text/Text";

test("renders card", () => {
  render(
    <Card>
      <Text content="Card content" />
    </Card>
  );
  const cardElement = screen.getByText(/Card content/i);
  expect(cardElement).toBeInTheDocument();
});

test("is greyed out when disabled", () => {
  render(
    <Card disabled>
      <Text content="Card content" />
    </Card>
  );
  // The card itself is a div, so we find it by its child's text
  const cardElement = screen.getByText(/Card content/i).parentElement;
  expect(cardElement).toHaveStyle("opacity: 0.5");
});
