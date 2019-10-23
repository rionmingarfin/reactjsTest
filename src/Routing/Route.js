import React, {Component} from 'react';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import Login from '../Component/login'
import register from '../Component/Register'
import Navbar from '../Component/Navbar'
import Logout from '../Component/logout'
import product from '../Component/Product'
import Detail from '../Component/detail'
import Edit from '../Component/edit'
import EditUser from '../Component/editUser'
import Member from '../Component/MemberList'

class Routing extends Component {
    render () {
      return (
        <div>
        <Router>
        <Redirect to="/product" />
        <Route exact path={"/product"} component={Navbar} />
        <Route exact path={"/product"} component={product} />
        <Route path={"/product/:id"} component={Detail} />
        <Route exact path={"/user/login"} component={Login} />
        <Route exact path={"/user/register"} component={register} />
        <Route exact path={"/user/logout"} component={Logout} />
        <Route exact path={"/product/:id/edit"} component={Edit} />
        <Route exact path={"/user/member/:id/edit"} component={EditUser} />
        <Route exact path={"/user/member"} component={Member} />
        </Router>
        </div>
      );
    }
  }
  
  export default Routing;