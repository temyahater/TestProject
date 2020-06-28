import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Admin from './admin';

const Main = () => {
  return (
    <Switch> 
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/admin' component={Admin}></Route>
    </Switch>
  );
}

export default Main;