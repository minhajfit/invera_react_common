import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import MenuItem from "@mui/material/MenuItem/MenuItem";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Dropdown",
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// Add a 'children' array with the following items
const childItems = [
  <MenuItem value={0} key={0}>
    <em>None</em>
  </MenuItem>,
  <MenuItem value={10} key={10}>
    Ten
  </MenuItem>,
  <MenuItem value={20} key={20}>
    Twenty
  </MenuItem>,
  <MenuItem value={30} key={30}>
    Thirty
  </MenuItem>,
];
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    id: "dropdown",
    color: "primary",
    label: "Dropdown Label", // Add the 'label' property with a string value
    children: childItems,
  },
};
