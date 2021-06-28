import { Switch, Route } from "react-router-dom";
import Layout from "./globalLayout/Layout";
import Homepage from "./pages/Homepage";
import EventCalendarPage from "./pages/EventCalendarPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import LocationsPage from "./pages/LocationsPage";
import LocationsMapPage from "./pages/LoactionsMapPage";
import LocationMapPage from "./pages/LocationMapPage";

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
        <Route path="/locations" exact>
          <LocationsPage />
        </Route>
        <Route path="/locations/map" exact>
          <LocationsMapPage />
        </Route>
        <Route path="/locations/map/:id">
          <LocationMapPage />
        </Route>
      </Switch>
    </Layout>
  );
}
