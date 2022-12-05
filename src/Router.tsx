import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  
} from "react-router-dom";
import SignIn from '@views/SignIn';
import Home from "@views/Home";
import UserUpdate from "@views/UsersDetail/index";



const Routes = () => {
  return (
    <Router>
      <Switch>
       <Route path="/signin" element= {<SignIn/>} />
       <Route path="/userDashboard" element={<Home/>} />
       <Route path="/userDashboard/detail/:id" element={<UserUpdate/>}/>
      </Switch>
    </Router>
  );
};

export default Routes;
