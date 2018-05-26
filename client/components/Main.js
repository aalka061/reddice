import { NavLink, Switch, Route } from 'react-router-dom';
import Greetings from './Greetings';
import SignupPage from './signup/signup_page';
import React from 'react'
const Main = () => (
    <Switch>
      <Route path='/signup' component={SignupPage}></Route>
      <Route path='/' component={Greetings}></Route>
    </Switch>
  );

  export default Main;