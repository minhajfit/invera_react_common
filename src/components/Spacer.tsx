import React from "react";
import { Box } from "@mui/material";

interface SpacerProps {
  id: string;
  width?: string;
  height?: string;
  startRow?: boolean;
  endRow?: boolean;
  notes?: string;
  columnSpan?: number;
  addExtraProperties?: boolean;
  canBeHidden?: boolean;
  styleName?: string;
  type: "LayoutSpacer" | "SpacerItem" | "RibbonGroupSeperator";
  children?: React.ReactNode; // Allow children, which can be blank
}

const Spacer: React.FC<SpacerProps> = ({
  id,
  width = "auto",
  height = "auto",
  startRow = false,
  endRow = false,
  notes,
  columnSpan = 1,
  addExtraProperties = false,
  canBeHidden = false,
  styleName,
  type,
  children, // Allow optional children
  ...rest
}) => {
  if (canBeHidden) {
    return null; // If the spacer can be hidden, render nothing.
  }

  return (
    <Box
      id={id}
      sx={{
        width: width,
        height: height,
        gridColumnStart: startRow ? "1" : "auto",
        gridColumnEnd: endRow ? "-1" : "auto",
        gridColumn: columnSpan ? `span ${columnSpan}` : undefined,
      }}
      className={styleName}
      data-type={type}
      data-notes={notes}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Spacer;
