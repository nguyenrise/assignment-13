import type { Meta, StoryObj } from "@storybook/react";
import { Img } from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
};

export default meta;
type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "Placeholder Image",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "Placeholder Image",
    disabled: true,
  },
};
