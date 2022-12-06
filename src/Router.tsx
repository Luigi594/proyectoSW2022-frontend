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
import PrivateRoute from "@components/Private/privateRoute";
import MovieNew from "@components/agregarMovies";
import ModificarMoviesux from "@components/modificarMovies";

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/sentEmail" element={<SentEmail />} />
        <Route path="/verifyPin" element={<VerifyPin />} />
        <Route path="/changePassword" element={<ChangePassword />} />

        <Route
          path="/home"
          element={
            <PrivateRoute allowedRoles={["public"]}>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/favorites"
          element={
            <PrivateRoute allowedRoles={["public"]}>
              <Favorites />
            </PrivateRoute>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <PrivateRoute allowedRoles={["public"]}>
              <DetailsMovie />
            </PrivateRoute>
          }
        />

        <Route
          path="/movielist"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <MovieList />
            </PrivateRoute>
          }
        />

        <Route
          path="/userDashboard"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <User />
            </PrivateRoute>
          }
        />

        <Route
          path="/userDashboard/detail/:id"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <UserDetail />
            </PrivateRoute>
          }
        />

        <Route
          path="/userDashboard/update/:id"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <UserUpdate />
            </PrivateRoute>
          }
        />

        <Route
          path="/agg"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <MovieNew />
            </PrivateRoute>
          }
        />

        <Route
          path="/UpdateMovie/:id"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
              <ModificarMoviesux />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Switch>
    </Router>
  );
};

export default Routes;
