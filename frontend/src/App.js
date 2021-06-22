import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./globalLayout/Layout";
import Homepage from "./pages/Homepage";
import LocationsPage from "./pages/LocationsPage";
import EventDetailsPage from "./pages/EventDetailsPage";

export default function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/home" exact>
            <Homepage />
          </Route>
          <Route path="/locations" exact>
            <LocationsPage />
          </Route>
          <Route path="/events/:id/details" exact>
            <EventDetailsPage />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}
