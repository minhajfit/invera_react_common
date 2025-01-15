import React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

// Omit 'disableRipple' from MuiButtonProps
type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends ButtonBaseProps {
  actionType?: "Header" | "GridAction" | "Default" | "PanelButton" | "GoButton" | "Toggle1" | "InfoButton";
  id?: string; // Corresponding to the schema's `id` attribute
  title?: string; // Corresponding to `title`
  visible?: boolean; // Corresponding to `visible`
  enabled?: boolean; // Corresponding to `enabled`
  allowTab?: boolean; // Corresponding to `allowTab`
  width?: string; // Corresponding to `width`
  height?: string; // Corresponding to `height`
  baseStyle?: string; // Corresponding to `baseStyle`
  styleName?: string; // Corresponding to `styleName`
  titleStyle?: string; // Corresponding to `titleStyle`
  type1?: string; // Corresponding to `type`
  inquiryMode?: "HideInInquiry" | "ShowInInquiry" | "ShowInquiryOnly"; // Corresponding to `inquiryMode`
  displayState?: "Show" | "Hide"; // Corresponding to `displayState`
  styleType?: "MenuVeryDark" | "MenuDark" | "MenuMedium" | "MenuLight" | "Default"; // Corresponding to `styleType`
  notes?: string; // Corresponding to `notes`
  parentMenuId?: string; // Corresponding to `parentMenuId`
  showIconsColumn?: boolean; // Corresponding to `showIconsColumn`
  stylePrimaryName?: string; // Corresponding to `stylePrimaryName`
  screenDefaultButton?: boolean; // Corresponding to `screenDefaultButton`
  icon?: string; // Corresponding to `icon`
  autoWidth?: boolean; // Corresponding to `autoWidth`
  captionType?: "LongLabel" | "ShortLabel" | "ColumnHeading"; // Corresponding to `captionType`
  menuButtonType?: "NONE" | "SORT_MENU_BUTTON"; // Corresponding to `menuButtonType`
  buttonType?: "Default" | "PopupWindowDefault" | "MenuButtonBig" | "MenuButton" | "OnOffButton" | "InfoButton" | "Image" | "None"; // Corresponding to `buttonType`
  showTitle?: boolean; // Corresponding to `showTitle`
  parentControl?: string; // Corresponding to `parentControl`
  imageHeight?: string; // Corresponding to `imageHeight`
  imageWidth?: string; // Corresponding to `imageWidth`
  imageSource?: string; // Corresponding to `imageSource`
  columnFilteringGridId?: string; // Corresponding to `columnFilteringGridId`
  addExtraProperties?: boolean; // Corresponding to `addExtraProperties`
  canBeHidden?: boolean; // Corresponding to `canBeHidden`
  iconType?: "Icon" | "Font"; // Corresponding to `iconType`
  isLeftSideButton?: boolean; // Corresponding to `isLeftSideButton`
  showFontIconOnlyInTitle?: boolean; // Corresponding to `showFontIconOnlyInTitle`
  fontIconClassName?: string; // Corresponding to `fontIconClassName`
  fontIconSize?: string; // Corresponding to `fontIconSize`
  fontIconAlignment?: "Right" | "Left"; // Corresponding to `fontIconAlignment`
  //children: React.ReactNode; // Ensure the button has children
}

export const Button = ({
  actionType = "Default",
  id,
  title,
  visible = true,
  enabled = true,
  width,
  height,
  baseStyle,
  styleName,
  titleStyle,
  type,
  inquiryMode,
  displayState,
  styleType,
  notes,
  parentMenuId,
  showIconsColumn,
  stylePrimaryName,
  screenDefaultButton,
  icon,
  autoWidth,
  captionType,
  menuButtonType,
  buttonType,
  showTitle,
  parentControl,
  imageHeight,
  imageWidth,
  imageSource,
  columnFilteringGridId,
  addExtraProperties,
  canBeHidden,
  iconType,
  isLeftSideButton,
  showFontIconOnlyInTitle,
  fontIconClassName,
  fontIconSize,
  fontIconAlignment,
  children,
  ...rest
}: ButtonProps) => {
  if (!visible) return null;

  const typeStyles = {
    Default: { variant: "contained", color: "primary" },
    Header: { variant: "outlined", color: "secondary" },
    GridAction: { variant: "outlined", color: "secondary" },
    PanelButton: { variant: "text", color: "secondary" },
    GoButton: { variant: "contained", color: "success" },
    InfoButton: { variant: "contained", color: "info" },
    Toggle1: { variant: "text", color: "inherit" },
  } as const;

  const { variant, color } = typeStyles[actionType] || typeStyles.Default;

  return (
    <MuiButton
      id={id}
     
      variant={variant}
      color={color}
      disabled={!enabled}
      {...rest}
      sx={{
        borderRadius: "4px",
        textTransform: "none",
        padding: "5px 5px",
        width,
        height,
        ...rest.sx,
      }}
    >
      {icon && <span className={fontIconClassName} style={{ fontSize: fontIconSize}}>{icon}</span>}
      {title}
    </MuiButton>
  );
};

Button.defaultProps = {
  type: "Default",
};

export default Button;
