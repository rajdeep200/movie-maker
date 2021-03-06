import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@material-ui/core";
import "./App.css";
import FormPage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";

const theme = createTheme({
  breakpoints: {
    values: {
      sm:600,
      md: 750,
      lg: 1024,
      xl: 1280,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Router>
        <Route exact path="/" component={FormPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/admin" component={AdminPage} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
