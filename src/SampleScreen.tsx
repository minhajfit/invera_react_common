import { Grid } from "@mui/material";
import { Layout, Button, Label, Dropdown, Icon } from "./index";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import { DataTable , Data, HeadCell} from "./components/DataTable";


const header: HeadCell[] = [
  { id: "id", label: "ID", numeric: true },
  { id: "movieName", label: "Movie Name", numeric: false },
  { id: "director", label: "Director", numeric: false },
  { id: "year", label: "Year", numeric: true },
  { id: "rating", label: "Rating", numeric: true },
];

const rows: Data[] = [
  { id: 1, movieName: "Inception", director: "Christopher Nolan", year: 2010, rating: 9 },
  { id: 2, movieName: "Interstellar", director: "Christopher Nolan", year: 2014, rating: 8.6 },
  { id: 3, movieName: "The Dark Knight", director: "Christopher Nolan", year: 2008, rating: 9 },
  { id: 4, movieName: "Memento", director: "Christopher Nolan", year: 2000, rating: 8.4 },
];

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
          padding: 1,
          
          flexShrink: 0, // Prevent resizing
        }}
      >

        <Icon iconType="LOGO" size="large" />
        <Label variant="h4" component="h1" gutterBottom >
          Header Title
        </Label >

        <Button actionType="Header" >

    
        <Icon iconType="Home" size="medium" />
        </Button>
      </Layout>

      {/* Second action Area */}
      <Layout
        direction="row"
        spacing={2}
        sx={{
          alignItems: "center",
          padding: 1,     
          backgroundColor: "secondary.main",
          flexShrink: 0, // Prevent resizing
        }}
      >
      
        <Button actionType="Toggle1" sx={{
          width:"150px"
        }} >
        Toggle1
        </Button>

        <Button actionType="Toggle1" sx={{
          width:"150px"
        }} >
        Toggle2
        </Button>
        
      </Layout>

      {/* Filter Area */}
      <Layout
        direction="row"
        spacing={2}
        sx={{
          alignItems: "center",
          padding: 2,     
          backgroundColor: "primary.light",
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
         
          backgroundColor:"primary.light"
        }}
      >
        {/* Grid Action Bar */}
        <Layout
          direction="row"
          width={"100%"}
          spacing={2}
          sx={{
            justifyContent: "flex-end",
            padding: 1,
           
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

        <DataTable rows={rows} header={header} zebraStriped />

        {/* Grid Content  */}
        <Grid container spacing={2}>
          {[...Array(12)].map((_, index) => (
            <Grid item xs={12} sm={6} md={2} key={index}>
              <Layout
                sx={{
               backgroundColor:"white" ,
                  padding: 2,
                  textAlign: "center",
                  width:"200px"
                }}
              >
               
               
              </Layout>
            </Grid>
          ))}
        </Grid> 
      
      </Layout>
    </Layout>
  );
};

export default App;
