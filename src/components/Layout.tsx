import React from "react";
import { Stack as MuiStack, StackProps as MuiStackProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "../index.css"; // Import the CSS file

type StackBaseProps = Omit<MuiStackProps, "direction" | "spacing">;

export interface LayoutProps extends StackBaseProps {
  direction?: "row" | "column";
  spacing?: number;
  color?: "primary" | "secondary" | "success" | "error" | "info";
  children: React.ReactNode;

  id?: string;
  styleName?: string;
  title?: string;
  type1?: string;// "Vertical" | "Horizontal" | "ComponentPlaceHolder" | "ThirdPartyContainer";
  componentType?: string;// "None" | "SecondaryHeader" | "RibbonBar" | "RibbonGroup" | "ToggleButtonContainer";
  containerType?:string;//  "None" | "Default" | "Detail" | "BrowseFilter" | "PopupWindowDefault" | "WhiteWithBorder";
  width?: string;
  height?: string;
  showBorder?: boolean;
  backGroundColor?: string;
  backgroundImage?: string;
  align?: string;// "Left" | "Right" | "Top" | "Bottom" | "Center";
  padding?: number;
  margin?: number;
  membersMargin?: string;
  captionType?:string;//  "LongLabel" | "ShortLabel" | "ColumnHeading";
  isToolStrip?: boolean;
  visible?: boolean;
  showResizeBar?: boolean;
  minMemberSize?: number;
  minMemberLength?: string;
  canBeHidden?: boolean;
  overflow?:string;//  "Visible" | "Hidden" | "Auto" | "Scroll" | "Clip_H" | "Clip_V";
  autoWidth?: boolean;
  autoHeight?: boolean;
  addExtraProperties?: boolean;
}

const getStyleForName = (styleName: string | undefined, theme: any) => {
  switch (styleName) {
    case "ixMainLayout":
      return {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText,
      };
    case "ixBrowseLayout":
      return {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.contrastText,
      };
    case "ixFilterContainer":
      return {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.text.primary,
      };
    case "titleLabelBold":
      return {
        backgroundColor: theme.palette.warning.light,
        color: theme.palette.primary.dark,
      };
    case "ixMainHeaderLayout":
      return {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.info.contrastText,
      };
    case "ixMainHeaderTitle":
      return {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.dark,
      };
    default:
      return {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      };
  }
};

export const Layout = ({
  type1 = "Vertical",
  spacing = 2,
  color = "primary",
  align,
  styleName,
  children,
  padding,
  ...rest
}: LayoutProps) => {
  const theme = useTheme();

  // Get styles based on the styleName
  const { backgroundColor, color: textColor } = getStyleForName(styleName, theme);

  // Set direction, justifyContent, and alignItems based on props
  const direction = type1 === "Vertical" ? "column" : "row";
  const justifyContent = align === "Left" ? "flex-start" : align === "Center" ? "center" : "flex-start";
  const alignItems = align === "Left" ? "flex-start" : align === "Center" ? "center" : "flex-start";
  const pad = padding;
  return (
    <MuiStack
      direction={direction}
      spacing={spacing}
      className={styleName}
      {...rest}
      sx={{
        backgroundColor: rest.backGroundColor || backgroundColor,
        color: textColor || 'black',
        backgroundImage: rest.backgroundImage ? `url(${rest.backgroundImage})` : undefined,
        
        border: rest.showBorder ? "1px solid red" : undefined,
        justifyContent,
        alignItems,
        padding:pad,
        ...rest.sx,
      }}
    >
      {children}
    </MuiStack>
  );
};

// Default properties
Layout.defaultProps = {
  type1: "Vertical",
  spacing: 2,
  visible: true,
};

export default Layout;
