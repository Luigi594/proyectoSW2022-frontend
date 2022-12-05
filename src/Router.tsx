import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";

import Home from "@views/Home";
import Favorites from "@components/CardMovies/Favorites";
import Navbar from "@components/navbar";
import NotFound from "@views/NotFound";
import DetailsMovie from "@components/DetailsMovie";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<DetailsMovie />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </Router>
  );
};

export default Routes;
