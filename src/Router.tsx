import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import SignIn from '@views/SignIn';
import Home from "@views/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
       <Route path="/signin" element= {<SignIn/>} />
       <Route path="/" element={<Home/>} />
      </Switch>
    </Router>
  );
};

export default Routes;
