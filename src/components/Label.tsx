import React from "react";
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from "@mui/material";

type TypographyBaseProps = Omit<MuiTypographyProps, "">;

export interface LabelProps extends TypographyBaseProps {
  variant?: "body1" | "body2" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "caption" | "overline";
  color?: string; // Allows custom color
  children: React.ReactNode; // Required children
}

export const Label = ({ variant = "body1", color = "inherit", children, ...rest }: LabelProps) => {
  return (
    <MuiTypography
      variant={variant}
      color={color}
      {...rest}
      sx={{
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.5,
        fontWeight: "normal", // Default styling for labels
        ...rest.sx,
      }}
    >
      {children}
    </MuiTypography>
  );
};

// Set default properties
Label.defaultProps = {
  variant: "body1",
  color: "inherit",
};

export default Label;
