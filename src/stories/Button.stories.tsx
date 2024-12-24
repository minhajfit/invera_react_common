import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions"; // Use this for click handlers in Storybook
import { Button } from "./Button";

// Default export for story metadata
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: action("button-click"), // Logs click events in the Storybook Actions panel
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Primary button story
export const Primary: Story = {
  args: {
    color: "primary",
    label: "Primary Button",
  },
};
