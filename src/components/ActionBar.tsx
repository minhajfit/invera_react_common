import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import {Home, Info, Back, LOGO} from "./FontIcon"


interface ActionBarProps {
  id: string;
  type: string;// "ButtonBar" | "ApplicationHeader" | "WindowButtonBar" | "AdvancedActionBar" | "CustomHeaderContainer";
  notes?: string;
  title?: string;
  logoutState?: string;// "Logout" | "Close" | "None";
  closeButton?: string;// "None" | "Back" | "Close";
  showApplicationAccessMode?: string;// "None" | "Inquiry" | "InquiryAddDuplicate";
  gridNavigationButtons?: string;// "None" | "All" | "RefreshOnly" | "RefreshAndNext" | "PreviousAndNext" | "PreviousNextDetail";
  align?:string;//  "Left" | "Right" | "Center";
  actionBarType?: string;// "NA" | "Primary" | "Secondary" | "SecondaryRounded";
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
  backButtonType?: string;// "ImageButton" | "Button";
  closeButtonImage?: string;
  closeButtonStyle?: string;
  closeButtonHeight?: string;
  closeButtonWidth?: string;
  closeButtonType?: string;// "ImageButton" | "Button";
  showHomeButton?: boolean;
  homeButtonImage?: string;
  homeButtonStyle?: string;
  homeButtonHeight?: string;
  homeButtonWidth?: string;
  homeButtonType?: string;// "ImageButton" | "Button";
  showInfoButton?: boolean;
  infoButtonImage?: string;
  infoButtonStyle?: string;
  infoButtonHeight?: string;
  infoButtonWidth?: string;
  infoButtonType?: string;// "ImageButton" | "Button";
  showExpandButton?: boolean;
  expandButtonImage?: string;
  expandButtonStyle?: string;
  expandButtonType?:string;//  "ImageButton" | "Button";
  showAdditionalFiltersButton?: boolean;
  additionalFiltersButtonImage?: string;
  additionalFiltersButtonStyle?: string;
  additionalFiltersButtonType?: string;// "ImageButton" | "Button";
  showSortButton?: boolean;
  sortButtonImage?: string;
  sortButtonStyle?: string;
  sortMenuOptions?: string;
  sortButtonType?: string;// "ImageButton" | "Button";
  showSettingsButton?: boolean;
  settingsButtonImage?: string;
  settingsButtonStyle?: string;
  settingsButtonType?:string;//  "ImageButton" | "Button";
  showMoreButton?: boolean;
  showLoadAllButton?: boolean;
  showExportButton?: boolean;
  showHelp?: boolean;
  helpTableName?: string;
  showColumnFilterButton?: boolean;
  logoutButtonStyle?: string;
  logoutButtonImage?: string;
  styleType?:string;//  "Default" | "DarkTeal" | "Custom";
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
  headerStyleType?: string;// "None" | "WithPadding" | "WithTopBottomPadding";
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

  const justifyContent =
    align === "Left"
      ? "flex-start"
      : align === "Center"
      ? "center"
      : "flex-end";

  const alignItems =
    align === "Left"
      ? "flex-start"
      : align === "Center"
      ? "center"
      : "flex-end";

  return (
    <Stack
      id={id}
      sx={{
        display: "flex",
        flexDirection: "row", // Ensures buttons are displayed side by side
        width: "100%",
        justifyContent: justifyContent,
        alignItems: alignItems,
        padding: "10px",
        background: actionBarStyle || "inherit",
      }}
      data-type={type}
      data-notes={notes}
      {...rest}
    >
     
     
     {showBackButton && (
        <Button 

          
          style={{
            backgroundImage: `url(${backButtonImage})`,
            height: rest.backButtonHeight,
            width: rest.backButtonWidth,
          }}  

          startIcon={<Back/>}
        >
          Back
        </Button>
      )}

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

      {title && title !== "XXX-XXX" && (
        <Typography variant="h5" style={{ flex: 1 }}  sx={{
          display: "flex",
          flexDirection: "row", // Ensures buttons are displayed side by side
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "10px",
          background: actionBarStyle || "inherit",
        }}  >

{<LOGO/>}
          {title}
        </Typography>
      )}


      {children}

 
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

      {showInfoButton && (
        <Button
          style={{
            backgroundImage: `url(${infoButtonImage})`,
            height: rest.infoButtonHeight,
            width: rest.infoButtonWidth,
          }}
          
          variant="outlined"
          startIcon={<Info/>}
        >
          Info
        </Button>
      )}
    </Stack>
  );
};

export default ActionBar;
