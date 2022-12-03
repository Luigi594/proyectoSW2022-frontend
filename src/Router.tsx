import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";

import Home from "@views/Home/Home";
import Login from "@views/Login/login";
import SentEmail from "@views/Login/sentEmail";
import VerifyPin from "@views/Login/verifyPin";
import ChangePassword from "@views/Login/changePassword";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sentEmail" element={<SentEmail />} />
        <Route path="/verifyPin" element={<VerifyPin />} />
        <Route path="/changePassword" element={<ChangePassword />} />
      </Switch>
    </Router>
  );
};

export default Routes;
