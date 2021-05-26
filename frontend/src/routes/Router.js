import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage/HomePage';

const Router = () => {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default Router;
