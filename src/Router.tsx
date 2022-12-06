import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import SignIn from "@views/SignIn";
import Home from "@views/Home";
import Favorites from "@components/CardMovies/Favorites";
import Navbar from "@components/navbar";
import NotFound from "@views/NotFound";
import DetailsMovie from "@components/DetailsMovie";
import MovieList from "@views/MovieList";
import UserDetail from "@views/UsersDetail/index";
import UserUpdate from "@views/UsersUpdate";
import User from "@views/Users";
import Login from "@views/Login/login";
import SentEmail from "@views/Login/sentEmail";
import VerifyPin from "@views/Login/verifyPin";
import ChangePassword from "@views/Login/changePassword";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<DetailsMovie />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/userDashboard" element={<User />} />
        <Route path="/userDashboard/detail/:id" element={<UserDetail />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/userDashboard/update/:id" element={<UserUpdate />} />
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
