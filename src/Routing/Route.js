import React, {Component} from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Login from '../Component/login'
import register from '../Component/Register'
import Navbar from '../Component/Navbar'
import Logout from '../Component/logout'

class Routing extends Component {
    render () {
      return (
        <div>
        <Router>
        <Redirect to="/product" />
        <Route exact path={"/product"} component={Navbar} />
        <Route exact path={"/user/login"} component={Login} />
        <Route exact path={"/user/register"} component={register} />
        <Route exact path={"/user/logout"} component={Logout} />
        </Router>
        </div>
      );
    }
  }
  
  export default Routing;