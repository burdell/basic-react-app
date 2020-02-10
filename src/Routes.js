import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import { App } from './App';
import { Search } from './Search';

export const AppStyles = styled.div`
  padding: 1rem;
  text-align: center;
`;

export function Routes() {
  return (
    <AppStyles>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </AppStyles>
  );
}
