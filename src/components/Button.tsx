import "./button.css";

import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends ButtonBaseProps {
  label: string;
  mytype: string;
}

export const Button: React.FC<ButtonProps> = ({ label, mytype, ...rest }) => {
  return (
    <MuiButton
      sx={{
        color: "inherit",
        size: "medium",
        variant: "outlined",
        width:"150px",
      }}
      {...rest}
    >
      {label}
    </MuiButton>
  );
};
export default Button;
