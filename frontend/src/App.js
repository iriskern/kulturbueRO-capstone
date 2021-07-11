import { Switch, Route } from "react-router-dom";
import Layout from "./globalLayout/Layout";
import Homepage from "./pages/Homepage";
import EventCalendarPage from "./pages/EventCalendarPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import LocationsPage from "./pages/LocationsPage";
import LocationsMapPage from "./pages/LoactionsMapPage";
import LocationMapPage from "./pages/LocationMapPage";
import LoginPage from "./pages/LoginPage";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./routing/PrivateRoute";
import MyEventsPage from "./pages/MyEventsPage";
import MyLocationsPage from "./pages/MyLocationsPage";
import SignUpPage from "./pages/SignUpPage";

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <Switch>
          <Route component={Homepage} path={["/", "/home"]} exact />
          <Route component={EventCalendarPage} path="/events" exact />
          <Route component={EventDetailsPage} path="/events/:id/details" />
          <Route component={LocationsPage} path="/locations" exact />
          <Route component={LocationsMapPage} path="/locations/map" exact />
          <Route component={LocationMapPage} path="/locations/map/:id" />
          <Route component={LoginPage} path="/me/login" exact />
          <Route component={SignUpPage} path="/me/signup" exact />
          <PrivateRoute component={MyEventsPage} path="/me/events" exact />
          <PrivateRoute component={MyLocationsPage} path="/me/locations" />
        </Switch>
      </Layout>
    </AuthProvider>
  );
}
