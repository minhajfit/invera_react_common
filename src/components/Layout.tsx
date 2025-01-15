import React from "react";
import { Stack as MuiStack, StackProps as MuiStackProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";

type StackBaseProps = Omit<MuiStackProps, "direction" | "spacing">;

export interface LayoutProps extends StackBaseProps {
  direction?: "row" | "column"; // The layout direction
  spacing?: number; // The spacing between elements
  color?: "primary" | "secondary" | "success" | "error" | "info"; // The background color
  children: React.ReactNode; // The children to render inside the layout

  // The new properties based on the XML schema
  id?: string; // Unique identifier
  styleName?: string; // Custom style name
  title?: string; // Title of the layout
  type1?: "Vertical" | "Horizontal" | "ComponentPlaceHolder" | "ThirdPartyContainer"; // Type of layout
  componentType?: "None" | "SecondaryHeader" | "RibbonBar" | "RibbonGroup" | "ToggleButtonContainer"; // Component type
  containerType?: "None" | "Default" | "Detail" | "BrowseFilter" | "PopupWindowDefault" | "WhiteWithBorder"; // Container type
  width?: string; // Width of the layout
  height?: string; // Height of the layout
  showBorder?: boolean; // Whether to show border
  backGroundColor?: string; // Background color
  backgroundImage?: string; // Background image URL
  align?: "Left" | "Right" | "Top" | "Bottom" | "Center"; // Alignment of content
  padding?: number; // Padding around the layout
  margin?: number; // Margin around the layout
  membersMargin?: string; // Margin for members within the layout
  captionType?: "LongLabel" | "ShortLabel" | "ColumnHeading"; // Caption type
  isToolStrip?: boolean; // Whether it is a toolstrip
  visible?: boolean; // Whether the layout is visible
  showResizeBar?: boolean; // Whether to show resize bar
  minMemberSize?: number; // Minimum member size
  minMemberLength?: string; // Minimum member length
  canBeHidden?: boolean; // Whether it can be hidden
  overflow?: "Visible" | "Hidden" | "Auto" | "Scroll" | "Clip_H" | "Clip_V"; // Overflow property
  autoWidth?: boolean;
  autoHeight?: boolean;
  addExtraProperties?: boolean;
}

export const Layout = ({
  type1 = "Vertical", // Default to "Vertical" if not provided
  spacing = 2,
  color = "primary", // Default color
  align,
  styleName,
  children,
  ...rest
}: LayoutProps) => {
  const theme = useTheme(); // Access the theme

  // Set direction based on type1
  const direction = type1 === "Vertical" ? "column" : "row"; 
  const justifyContent = align === "Left" 
  ? "flex-start" 
  : align === "Center" 
    ? "center" 
    : "flex-start"; // Default or other cases

const alignItems = align === "Left" 
  ? "flex-start" 
  : align === "Center" 
    ? "center" 
    : "flex-start"; // Default or other cases

  return (
    <MuiStack
      direction={direction} // Set direction to "column" or "row" based on type1
      spacing={spacing}
      
      {...rest} // Pass all remaining props to MuiStack
      sx={{
        padding: 2,
        border:'1px solid red',
        backgroundColor: theme.palette[color].main || "#FFFFFF", // Apply color from theme or default background
        width: rest.width, // Apply custom width
        height: rest.height, // Apply custom height
        margin: rest.margin, // Apply margin
        justifyContent: justifyContent,
        alignItems : alignItems,
        
        background: rest.backGroundColor || theme.palette[color].light, // Background color from props or default
        ...rest.sx, // Allow additional custom styling
      }}
    >
      {children}
    </MuiStack>
  );
};

// Set default properties
Layout.defaultProps = {
  type1: "Vertical", // Default type is "Vertical"
  spacing: 2,
 // color: "primary", // Default color
  visible: true, // Default visibility
};

export default Layout;
