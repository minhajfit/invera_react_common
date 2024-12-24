import {
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from "@mui/material";

type SelectBaseProps = Omit<MuiSelectProps, "">;

export interface SelectProps extends SelectBaseProps {
  label: string;
  children: React.ReactNode; // Add the 'children' prop
}

export const Dropdown = ({ label, children, ...rest }: SelectProps) => {
  // Pass 'children' to the MuiSelect component
  return (
    <MuiSelect
      label={label}
      {...rest}
      sx={{ minWidth: 150 }}
      style={{ backgroundColor: "orange" }}
    >
      {children}
    </MuiSelect>
  );
};

// Set default properties
Dropdown.defaultProps = {};
