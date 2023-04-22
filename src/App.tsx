import { ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";
import NewsHomePage from "./Components/NewsHomePage";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 15,
    },
    fontFamily: "Inter",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <NewsHomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
