import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import EventDetailsPage from "./pages/EventDetailsPage";
import Layout from "./globalLayout/Layout";

export default function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/home" exact>
            <Homepage />
          </Route>
          <Route path="event/:id/details" exact>
            <EventDetailsPage />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}
