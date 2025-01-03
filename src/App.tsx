import React from "react";
import { Grid, Box } from "@mui/material";
import { Layout, Button, Label, Dropdown, Icon } from "./index";
import MenuItem from "@mui/material/MenuItem/MenuItem";


const App = () => {
  return (
    <Layout
    direction="column"
    spacing={2}
      sx={{
        
     
        height: "100vh", // Full screen height
        spacing:"3",
       
        
      }}
    >
      {/* Header Section */}
      <Layout
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "primary.main",
          padding: 2,
          color: "#fff",
          flexShrink: 0, // Prevent resizing
        }}
      >

        <Icon iconType="LOGO" size="large" />
        <Label variant="h4" component="h1" gutterBottom color="black">
          Header Title
        </Label >

        <Button actionType="Header" >
        <Icon iconType="Home" size="medium" />
        </Button>
      </Layout>

      {/* Filter Area */}
      <Layout
        direction="row"
        spacing={2}
        sx={{
          alignItems: "center",
          padding: 2,
          border: "1px solid lightgray",
          borderRadius: "8px",
          backgroundColor: "#f9f9f9",
          flexShrink: 0, // Prevent resizing
        }}
      >
        <Dropdown label="Filter by" defaultValue="0">
          <MenuItem value={0} key={0}>
            <em>None</em>
          </MenuItem>,
          <MenuItem value={10} key={10}>
            Ten
          </MenuItem>,
          <MenuItem value={20} key={20}>
            Twenty
          </MenuItem>,
          <MenuItem value={30} key={30}>
            Thirty
          </MenuItem>

        </Dropdown>
        <Button actionType="GoButton" endIcon={<Icon iconType="Go" />}>
          Go
        </Button>
      </Layout>

      {/* Main Content Area */}
      <Layout
       direction="column"
        sx={{
          flex: 1, // Take up remaining space
          padding: 2,
        }}
      >
        {/* Grid Action Bar */}
        <Layout
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "flex-end",
            padding: 2,
            border: "1px solid lightgray",
            borderRadius: "8px",
            marginBottom: 2,
          }}
        >
          <Button actionType="GridAction" startIcon={<Icon iconType="Add" />}>
            Add
          </Button>
          <Button actionType="GridAction" startIcon={<Icon iconType="Delete" />}>
            Delete
          </Button>
        </Layout>

        {/* Grid Content */}
        <Grid container spacing={2}>
          {[...Array(12)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Layout
                sx={{
                  border: "1px solid lightgray",
                  borderRadius: "8px",
                  padding: 2,
                  textAlign: "center",
                }}
              >
                <h3>Card {index + 1}</h3>
                <p>Some content here...</p>
              </Layout>
            </Grid>
          ))}
        </Grid>
      </Layout>
    </Layout>
  );
};

export default App;
