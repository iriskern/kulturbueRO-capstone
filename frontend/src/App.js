import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./globalLayout/Layout";
import Homepage from "./pages/Homepage";
import LocationsPage from "./pages/LocationsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import EventCalendarPage from "./pages/EventCalendarPage";

export default function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/home" exact>
            <Homepage />
          </Route>
          <Route path="/events" exact>
            <EventCalendarPage />
          </Route>
          <Route path="/events/:id/details" exact>
            <EventDetailsPage />
          </Route>
          <Route path="/locations" exact>
            <LocationsPage />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}
