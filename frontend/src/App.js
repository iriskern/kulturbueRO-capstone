import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./globalLayout/Layout";
import Homepage from "./pages/Homepage";
import EventDetailsPage from "./pages/EventDetailsPage";

export default function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/home" exact>
            <Homepage />
          </Route>
          <Route path="/events/:id/details" exact>
            <EventDetailsPage />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}
