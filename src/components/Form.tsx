import React from "react";
import { Grid } from "@mui/material";
//import Grid from '@mui/material/Grid2';

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
  captionType?: string;// "LongLabel" | "ShortLabel" | "ColumnHeading";
  itemChanged?: boolean;
  defaultColumnWidthFlag?: boolean;
  addExtraProperties?: boolean;
  canBeHidden?: boolean;
  title?: string;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({
  //id,
 // styleName,
  //width = "100%",
  //height = "auto",
  //padding = 2,
  numberOfColumns,
  //wrapTitles = true,
  //backGroundColor = "",
 // showBorder = false,
 // autoWidth = false,
 // autoHeight = false,
  //visible = true,
  //autoFocus = false,
 // captionType = "ShortLabel",
  //itemChanged = false,
  //defaultColumnWidthFlag = true,
  //addExtraProperties = false,
  //canBeHidden = false,
  //title,
  children
}) => {

  const columns = parseInt(numberOfColumns); // Convert numberOfColumns to an integer


  return (
    

      <Grid container gridColumn={columns} spacing={2} rowSpacing={2} columnSpacing={2} >
     
        {React.Children.map(children, (child) => {

          if (!React.isValidElement(child)) {
            return null; // Skip if child is null, undefined, or not a valid React element
          }

          const columnSpan = child.props.columnSpan;
          const xs = parseInt(columnSpan) ; 

          return (
            <Grid item xs={xs} >
              {child}
            </Grid>
          );
        })}
      </Grid>
    
  );
};

export default Form;
