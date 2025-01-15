import React from "react";
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from "@mui/material";

type TypographyBaseProps = Omit<MuiTypographyProps, "variant">;

export interface LabelProps extends TypographyBaseProps {
  id: string; // Required ID
  notes?: string; // Optional notes
  title?: string; // Title for the label
  visible?: boolean; // Visibility control
  width?: string; // Optional width
  height?: string; // Optional height
  autoHeight?: boolean; // Auto height control
  autoWidth?: boolean; // Auto width control
  styleName?: string; // Optional custom style name
  enabled?: boolean; // Enable/disable control
  addExtraProperties?: boolean; // Optional extra properties flag
  canBeHidden?: boolean; // Optional flag for hiding
  captionType?: "LongLabel" | "ShortLabel" | "ColumnHeading"; // Caption type enum
  icon?: string; // Optional icon path
  iconType?: "Icon" | "Font"; // Icon type enum
  showFontIconOnlyInTitle?: boolean; // Flag for font icon visibility
  fontIconClassName?: string; // Font icon class name
  fontIconSize?: string; // Font icon size
  fontIconAlignment?: "Right" | "Left"; // Font icon alignment
  color?: string; // Allows custom color
  children: React.ReactNode; // Required children
}

export const Label = ({
  id,
  notes,
  title,
  visible = true,
  width,
  height,
  autoHeight = false,
  autoWidth = false,
  styleName,
  enabled = true,
  addExtraProperties = false,
  canBeHidden = true,
  captionType = "ShortLabel",
  icon,
  iconType = "Font",
  showFontIconOnlyInTitle = false,
  fontIconClassName,
  fontIconSize,
  fontIconAlignment = "Left",
  color = "inherit",
  children,
  ...rest
}: LabelProps) => {
  if (!visible) return null;

  return (
    <MuiTypography
      id={id}
      title={title}
      noWrap
      {...rest}
      sx={{
        width: autoWidth ? "auto" : width,
        height: autoHeight ? "auto" : height,
        color: enabled ? color : "gray",
        fontFamily: styleName || "Arial, sans-serif",
        display: "flex",
        alignItems: "center",
        fontWeight: "normal",
      
        ...rest.sx,
      }}
    >
      {icon && iconType === "Font" && (
        <span
          className={fontIconClassName}
          style={{
            fontSize: fontIconSize,
            marginRight: fontIconAlignment === "Right" ? "0" : "8px",
            marginLeft: fontIconAlignment === "Right" ? "8px" : "0",
          }}
        >
          {showFontIconOnlyInTitle ? "" : icon}
        </span>
      )}
      {children || title}
    </MuiTypography>
  );
};

// Set default properties
Label.defaultProps = {
  visible: true,
  enabled: true,
  autoHeight: false,
  autoWidth: false,
  canBeHidden: true,
  captionType: "ShortLabel",
  iconType: "Font",
  fontIconAlignment: "Left",
  color: "inherit",
};

export default Label;
