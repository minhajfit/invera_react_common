import React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

// Omit 'disableRipple' from MuiButtonProps
type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends ButtonBaseProps {
  actionType?: "Header" | "GridAction" | "Default" | "PanelButton" | "GoButton" | "Toggle1"; // New Type property
  children: React.ReactNode; // Ensure the button has children (like text or an icon)
}

export const Button = ({ actionType: mytype = "Default", children, ...rest }: ButtonProps) => {
  // Map types to specific variant and color
  const typeStyles = {
    Default: { variant: "contained", color: "primary" },
    Header: { variant: "outlined", color: "secondary" },
    GridAction: { variant: "outlined", color: "secondary" },
    PanelButton: { variant: "text", color: "secondary" },
    GoButton: { variant: "contained", color: "success" },
    InfoButton: { variant: "contained", color: "info" },
    Toggle1: { variant: "text", color: "inherit" }, // Use "inherit" for custom styling
  } as const;

  // Get variant and color based on type
  const { variant, color } = typeStyles[mytype] || typeStyles.Default;

  return (
    <MuiButton
      variant={variant}
      color={color}
      {...rest}
      sx={{
        borderRadius: "4px", // Custom styling
        textTransform: "none", // Disable uppercase by default
        padding: "8px 8px", // Adjust padding
        ...(mytype === "Toggle1" && {
          color: "white", 
          borderBottom: "3px solid white", 
          borderRight: "3px solid white", 
          borderRadius: "0px", 
        }),
        ...rest.sx, // Allow additional custom styling via props
      }}
    >
      {children}
    </MuiButton>
  );
};

// Set default properties
Button.defaultProps = {
  type: "Default",
};

export default Button;
