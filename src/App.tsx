import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "./components/Button";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Hellow World
          </Typography>
          <Button label="Hello World" mytype="header"/>
        </Box>
      </Container>
    </>
  );
}

export default App;
