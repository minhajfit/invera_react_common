import React from "react";
import { Stack as MuiStack, StackProps as MuiStackProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type StackBaseProps = Omit<MuiStackProps, "">;

export interface LayoutProps extends StackBaseProps {
  direction?: "row" | "column";
  spacing?: number;
  color?: "primary" | "secondary" | "success" | "error" | "info"; // Added color prop
  children: React.ReactNode; // Add the 'children' prop
}

export const Layout = ({
  direction = "row",
  spacing = 2,
  color = "primary", // Default color
  children,
  ...rest
}: LayoutProps) => {
  const theme = useTheme(); // Access the theme

  return (
    <MuiStack
      direction={direction}
      spacing={spacing}
      {...rest}
      sx={{
        padding: 2,
        border: "1px solid lightgray",
        borderRadius: "8px",
        backgroundColor: theme.palette[color].main || "#f9f9f9", // Apply color from theme or default background
        ...rest.sx, // Allow additional custom styling
      }}
    >
      {children}
    </MuiStack>
  );
};

// Set default properties
Layout.defaultProps = {
  direction: "row",
  spacing: 2,
  color: "primary", // Default color
};

export default Layout;
