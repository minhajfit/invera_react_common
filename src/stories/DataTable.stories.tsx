import { Data, DataTable, HeadCell } from "./DataTable";
import { createData } from "./DataTableUtils";

import type { Meta, StoryObj } from "@storybook/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/DataTable",
  component: DataTable,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Header Row cells
const headCells: HeadCell[] = [
  {
    id: "movieName",
    numeric: false,
    label: "Movie Name",
  },
  {
    id: "director",
    numeric: false,

    label: "Director",
  },
  {
    id: "year",
    numeric: true,

    label: "Year",
  },
  {
    id: "rating",
    numeric: true,

    label: "Rating",
  },
];
// Data
const rows: Data[] = [
  createData(1, "The Shawshank Redemption", "Frank Darabont", 1994, 9.3),
  createData(2, "The Godfather", "Francis Ford Coppola", 1972, 9.2),
  createData(3, "The Dark Knight", "Christopher Nolan", 2008, 9.0),
  createData(4, "Tenet", "Christopher Nolan", 2020, 7.4),
  createData(5, "Inception", "Christopher Nolan", 2010, 8.8),
  createData(6, "The Matrix", "Lana Wachowski", 1999, 8.7),
  createData(7, "Interstellar", "Christopher Nolan", 2014, 8.6),
  createData(8, "Dune Part One", "Denis Villeneuve", 2021, 8.3),
  createData(9, "The Green Mile", "Frank Darabont", 1999, 8.6),
  createData(
    10,
    "The Lord of the Rings: The Return of the King",
    "Peter Jackson",
    2003,
    8.9,
  ),
  createData(
    11,
    "The Lord of the Rings: The Fellowship of the Ring",
    "Peter Jackson",
    2001,
    8.8,
  ),
  createData(
    12,
    "The Lord of the Rings: The Two Towers",
    "Peter Jackson",
    2002,
    8.7,
  ),
  createData(13, "The Godfather: Part II", "Francis Ford Coppola", 1974, 9.0),
  createData(14, "The Dark Knight Rises", "Christopher Nolan", 2012, 8.4),
  createData(15, "The Fifth Element", "Luc Besson", 1997, 7.7),
  createData(
    16,
    "Star Wars: Episode IV - A New Hope",
    "George Lucas",
    1977,
    8.6,
  ),
  createData(17, "2001: A Space Odyssey", "Stanley Kubrick", 1968, 8.3),
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    header: headCells,
    rows,
  },
} as Story; // Add the type assertion to Story.

export const ZebraStriped: Story = {
  args: {
    header: headCells,
    rows,
    zebraStriped: true, // Add the 'zebraStriped' property
  },
} as Story; // Add the type assertion to Story.
