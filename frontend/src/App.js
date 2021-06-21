import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import EventDetailsPage from "./pages/EventDetailsPage";
import Layout from "./globalLayout/Layout";

export default function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route component={Homepage} path="/home" exact />
          <Route
            component={EventDetailsPage}
            path="/events/:id/details"
            exact
          />
        </Switch>
      </Router>
    </Layout>
  );
}
