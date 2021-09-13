
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import FormPage from "./pages/FormPage";

function App() {

  return (
    <Router>
      <Route to="/" component={FormPage} />
    </Router>
  )
}

export default App;
