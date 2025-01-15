import React from "react";
import { Stack, Button, Typography } from "@mui/material";

interface ActionBarProps {
  id: string;
  type: "ButtonBar" | "ApplicationHeader" | "WindowButtonBar" | "AdvancedActionBar" | "CustomHeaderContainer";
  notes?: string;
  title?: string;
  logoutState?: "Logout" | "Close" | "None";
  closeButton?: "None" | "Back" | "Close";
  showApplicationAccessMode?: "None" | "Inquiry" | "InquiryAddDuplicate";
  gridNavigationButtons?: "None" | "All" | "RefreshOnly" | "RefreshAndNext" | "PreviousAndNext" | "PreviousNextDetail";
  align?: "Left" | "Right" | "Center";
  actionBarType?: "NA" | "Primary" | "Secondary" | "SecondaryRounded";
  showCenterLogo?: boolean;
  logoImageSource?: string;
  logoImageHeight?: string;
  logoImageWidth?: string;
  showLeftLogo?: boolean;
  leftLogoImageSource?: string;
  leftLogoImageHeight?: string;
  leftLogoImageWidth?: string;
  showBackButton?: boolean;
  backButtonImage?: string;
  backButtonStyle?: string;
  backButtonHeight?: string;
  backButtonWidth?: string;
  backButtonType?: "ImageButton" | "Button";
  closeButtonImage?: string;
  closeButtonStyle?: string;
  closeButtonHeight?: string;
  closeButtonWidth?: string;
  closeButtonType?: "ImageButton" | "Button";
  showHomeButton?: boolean;
  homeButtonImage?: string;
  homeButtonStyle?: string;
  homeButtonHeight?: string;
  homeButtonWidth?: string;
  homeButtonType?: "ImageButton" | "Button";
  showInfoButton?: boolean;
  infoButtonImage?: string;
  infoButtonStyle?: string;
  infoButtonHeight?: string;
  infoButtonWidth?: string;
  infoButtonType?: "ImageButton" | "Button";
  showExpandButton?: boolean;
  expandButtonImage?: string;
  expandButtonStyle?: string;
  expandButtonType?: "ImageButton" | "Button";
  showAdditionalFiltersButton?: boolean;
  additionalFiltersButtonImage?: string;
  additionalFiltersButtonStyle?: string;
  additionalFiltersButtonType?: "ImageButton" | "Button";
  showSortButton?: boolean;
  sortButtonImage?: string;
  sortButtonStyle?: string;
  sortMenuOptions?: string;
  sortButtonType?: "ImageButton" | "Button";
  showSettingsButton?: boolean;
  settingsButtonImage?: string;
  settingsButtonStyle?: string;
  settingsButtonType?: "ImageButton" | "Button";
  showMoreButton?: boolean;
  showLoadAllButton?: boolean;
  showExportButton?: boolean;
  showHelp?: boolean;
  helpTableName?: string;
  showColumnFilterButton?: boolean;
  logoutButtonStyle?: string;
  logoutButtonImage?: string;
  styleType?: "Default" | "DarkTeal" | "Custom";
  actionBarStyle?: string;
  actionBarContentsStyle?: string;
  helpDataElementName?: string;
  addExtraProperties?: boolean;
  canBeHidden?: boolean;
  useDefault?: boolean;
  useDefaultStyle?: boolean;
  headerStyleName?: string;
  dividerLineStyleName?: string;
  headerTitleStyle?: string;
  navigationContainerStyle?: string;
  userTitleStyle?: string;
  navigationButtonHeight?: string;
  navigationButtonWidth?: string;
  headerStyleType?: "None" | "WithPadding" | "WithTopBottomPadding";
  children?: React.ReactNode;
}

const ActionBar: React.FC<ActionBarProps> = ({
  id,
  type,
  title,
  notes,
  align = "Left",
  actionBarStyle,
  actionBarContentsStyle,
  showCenterLogo,
  logoImageSource,
  showLeftLogo,
  leftLogoImageSource,
  showBackButton,
  backButtonImage,
  showHomeButton,
  homeButtonImage,
  showInfoButton,
  infoButtonImage,
  children,
  ...rest
}) => {
  if (rest.canBeHidden) {
    return null; // Render nothing if the action bar can be hidden
  }

   // Set direction based on type1
   const justifyContent = align === "Left" 
   ? "flex-start" 
   : align === "Center" 
     ? "center" 
     : "flex-end"; // Default or other cases
 
 const alignItems = align === "Left" 
   ? "flex-start" 
   : align === "Center" 
     ? "center" 
     : "flex-end"; // Default or other cases

     
  return (
    <Stack
      id={id}
      sx={{
        display: "flex",
        width:'100%',
        justifyContent: justifyContent,
        alignItems : alignItems,
        border:'1px solid green',
        padding: "10px",
        background: actionBarStyle || "inherit",
      }}
      data-type={type}
      data-notes={notes}
      {...rest}
    >
      {showLeftLogo && leftLogoImageSource && (
        <img
          src={leftLogoImageSource}
          alt="Left Logo"
          style={{ height: rest.leftLogoImageHeight, width: rest.leftLogoImageWidth }}
        />
      )}

      {showCenterLogo && logoImageSource && (
        <img
          src={logoImageSource}
          alt="Center Logo"
          style={{ height: rest.logoImageHeight, width: rest.logoImageWidth }}
        />
      )}

      {(title && title != 'XXX-XXX') && (
        <Typography variant="h6" style={{ flex: 1 }}>
          {title}
        </Typography>
      )}

      {children}

      {showBackButton && backButtonImage && (
        <Button
          style={{
            backgroundImage: `url(${backButtonImage})`,
            height: rest.backButtonHeight,
            width: rest.backButtonWidth,
            
          }}
        >
          Back
        </Button>
      )}

      {showHomeButton && homeButtonImage && (
        <Button
          style={{
            backgroundImage: `url(${homeButtonImage})`,
            height: rest.homeButtonHeight,
            width: rest.homeButtonWidth,
            
          }}
        >
          Home
        </Button>
      )}

      {showInfoButton && infoButtonImage && (
        <Button
          style={{
            backgroundImage: `url(${infoButtonImage})`,
            height: rest.infoButtonHeight,
            width: rest.infoButtonWidth,
            
          }}
        >
          Info
        </Button>
      )}
    </Stack>
  );
};

export default ActionBar;
