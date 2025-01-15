import React from "react";
import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps, InputAdornment, IconButton } from "@mui/material";

// Define all additional properties based on the Input schema
type CustomTextFieldProps = Omit<MuiTextFieldProps, 'variant'> & {
  variant?: "filled" | "standard" | "outlined"; // Explicitly allow variant as filled, standard, or outlined
  showPasswordToggle?: boolean; // Password visibility toggle
  characterCasing?: "Upper" | "Lower" | "None"; // Character casing transformation
  customStyle?: React.CSSProperties; // Optional custom style
  id: string; // Required ID attribute
  title?: string; // Title attribute for the input
  width?: string; // Optional width for the input
  visible?: boolean; // Visibility flag
  enabled?: boolean; // Enabled flag
  captionType?: "LongLabel" | "ShortLabel" | "ColumnHeading"; // Caption type
  showTitle?: boolean; // Flag to show title
  wrapTitle?: boolean; // Flag to wrap title
  addExtraProperties?: boolean; // Additional properties flag
  canBeHidden?: boolean; // Flag if it can be hidden
  startRow?: boolean; // Flag if it should start a new row
  endRow?: boolean; // Flag if it should end a row
  columnSpan?: string; // Column span for the layout
  mandatory?: boolean; // Flag if input is mandatory
  setFilterInputText?: boolean; // Flag to set filter input text
  notes?: string; // Optional notes for input
  titleStyle?: string; // Custom title style
  type: "Text" | "TextArea" | "Numeric" | "Lookup" | "LuceneIndex" | "Email" | "InputItemEditor" | "Password" | "AldDescription"; // Type of input
  stringLength?: string; // Maximum string length
  helpContentId?: string; // Help content ID for the input field
  disabledStyle?: string; // Help content ID for the input field

  // Numeric type related properties
  numericType?: "Integer" | "Decimal" | "Currency" | "IntegerID"; 
  signed?: "Signed" | "PositiveOnly" | "NegativeOnly"; 
  integralDigit?: number; // Integral digit for numeric input
  maxDecimalDigits?: number; // Max decimal digits for numeric input
  minDecimalDigits?: number; // Min decimal digits for numeric input
  blankOnZero?: boolean; // Flag to blank the field on zero
  showGroupSeparator?: boolean; // Flag to show group separator

  // Text area related properties
  numberOfRows?: number; // Number of rows for TextArea
  height?: number; // Height of TextArea

  // Lookup input properties
  stopString?: string; // Stop string for lookup
  lookupFieldLength?: number; // Lookup field length
  fieldName?: string; // Field name for lookup
  lookupInputType?: "Text" | "Numeric"; // Type for lookup input
  multiSelect?: boolean; // Flag for multi select
  maxSelect?: number; // Max select for lookup
  focusIn?: boolean; // Focus in flag for lookup
  onBlurEvent?: boolean; // Blur event for lookup

  // Lucene Index properties
  className?: string; // Class name for LuceneIndex
  showTitleAsLink?: boolean; // Flag to show title as a link

  // AldDescription properties
  tblPfx?: string; // Table prefix for AldDescription
  dataElNm?: string; // Data element name for AldDescription

  // Font Icon properties
  fontIconClassName?: string; // Font icon class name
  fontIconSize?: string; // Font icon size
  fontIconAlignment?: "Right" | "Left"; // Font icon alignment
  showFontIconOnlyInTitle?: boolean; // Flag to show font icon only in title
};

const TextField: React.FC<CustomTextFieldProps> = ({
  showPasswordToggle = false,
  customStyle,
  title,
  characterCasing = "None",
  
  type = "text",
  variant = "outlined", // Default variant as "outlined"
  mandatory = false,
  numericType,
  stringLength,
  height,
  numberOfRows,
  stopString,
  ...rest
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  // Handle password visibility toggle
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Transform the input value based on characterCasing
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (characterCasing === "Upper") {
      event.target.value = event.target.value.toUpperCase();
    } else if (characterCasing === "Lower") {
      event.target.value = event.target.value.toLowerCase();
    }
    if (rest.onChange) rest.onChange(event);
  };

  return (
    <MuiTextField
      {...rest} // Spread all other props
      variant={variant} // Pass the variant prop to TextField
      type={showPassword ? "text" : type} // Toggle type if password field
      onChange={handleInputChange} // Apply casing transformation
      style={customStyle} // Apply custom styling if provided
      label={title} 
      inputProps={{
        maxLength: stringLength, // Apply max length if specified
        style: { height: height ? height : "auto" }, // Apply height if specified
      }}
      InputProps={{
        endAdornment:
          showPasswordToggle && type === "password" ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleTogglePasswordVisibility}
                edge="end"
              >
              </IconButton>
            </InputAdornment>
          ) : null,
      }}
      rows={numberOfRows} // Apply rows for text area
    />
  );
};

export default TextField;
