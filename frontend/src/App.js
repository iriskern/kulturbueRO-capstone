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

export default function App() {
  return (
    <Layout>
      <AuthProvider>
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <PrivateRoute path="/home">
            <Homepage />
          </PrivateRoute>
          <PrivateRoute path="/events" exact>
            <EventCalendarPage />
          </PrivateRoute>
          <PrivateRoute path="/events/:id/details">
            <EventDetailsPage />
          </PrivateRoute>
          <PrivateRoute path="/locations" exact>
            <LocationsPage />
          </PrivateRoute>
          <PrivateRoute path="/locations/map" exact>
            <LocationsMapPage />
          </PrivateRoute>
          <PrivateRoute path="/locations/map/:id">
            <LocationMapPage />
          </PrivateRoute>
          <PrivateRoute path="/myevents">
            <MyEventsPage />
          </PrivateRoute>
          <PrivateRoute path="/mylocations">
            <MyLocationsPage />
          </PrivateRoute>
        </Switch>
      </AuthProvider>
    </Layout>
  );
}
