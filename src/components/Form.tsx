import React from "react";
import { Grid, TextField as MUITextField, Typography } from "@mui/material";

interface FormProps {
  id: string;
  styleName?: string;
  width?: string;
  height?: string;
  padding?: number;
  numberOfColumns: string;
  columnWidth: string;
  wrapTitles?: boolean;
  backGroundColor?: string;
  showBorder?: boolean;
  cellBorder?: boolean;
  autoWidth?: boolean;
  autoHeight?: boolean;
  visible?: boolean;
  autoFocus?: boolean;
  captionType?: "LongLabel" | "ShortLabel" | "ColumnHeading";
  itemChanged?: boolean;
  defaultColumnWidthFlag?: boolean;
  addExtraProperties?: boolean;
  canBeHidden?: boolean;
  title?: string;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({
  id,
  styleName,
  width = "100%",
  height = "auto",
  padding = 2,
  numberOfColumns,
  wrapTitles = true,
  backGroundColor = "",
  showBorder = false,
  autoWidth = false,
  autoHeight = false,
  visible = true,
  autoFocus = false,
  captionType = "ShortLabel",
  itemChanged = false,
  defaultColumnWidthFlag = true,
  addExtraProperties = false,
  canBeHidden = false,
  title,
  children
}) => {

    const columns = parseInt(numberOfColumns, 10); // Convert numberOfColumns to an integer


  return (
    <div
      id={id}
      style={{
        width,
        height,
        padding,
        backgroundColor: backGroundColor,
        border: showBorder ? "1px solid #ccc" : "none",
        display: visible ? "block" : "none",
      }}
    >
    
      <Grid container spacing={2} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {React.Children.map(children, (child) => {
          return (
            <Grid item xs={12 / columns}>
              {child}
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Form;
