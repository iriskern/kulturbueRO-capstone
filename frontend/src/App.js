import { Switch, Route } from "react-router-dom";
import Layout from "./globalLayout/Layout";
import Homepage from "./pages/Homepage";
import LocationsPage from "./pages/LocationsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import EventCalendarPage from "./pages/EventCalendarPage";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/home">
          <Homepage />
        </Route>
        <Route path="/events" exact>
          <EventCalendarPage />
        </Route>
        <Route path="/events/:id/details">
          <EventDetailsPage />
        </Route>
        <Route path="/locations">
          <LocationsPage />
        </Route>
      </Switch>
    </Layout>
  );
}
