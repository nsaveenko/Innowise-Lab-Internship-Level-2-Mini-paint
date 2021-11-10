import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from '../pages/Auth/SignUp/SignUp';
import SignIn from '../pages/Auth/SignIn/SignIn';
import Dashboard from '../pages/Dashboard/Dashboard';
import Editor from '../pages/Editor/Editor';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/' component={Dashboard} />
        <Route path='/editor' component={Editor} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
