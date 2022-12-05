import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import MovieList from '@views/MovieList'

const Routes = () => {
  return (
    <Router>
      <Switch>
      

        <Route path="/MovieList" element={<MovieList />} />
      </Switch>
    </Router>
  );
};

export default Routes;
