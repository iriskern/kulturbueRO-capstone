import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}
