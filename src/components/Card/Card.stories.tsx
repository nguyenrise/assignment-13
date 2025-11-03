import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Text } from "../Text/Text";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <Text content="This is a card" />
    </Card>
  ),
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  ...Default,
  args: {
    disabled: true,
  },
};
