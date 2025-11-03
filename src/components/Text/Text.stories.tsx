import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    content: "Default Text",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    content: "Disabled Text",
    disabled: true,
  },
};
