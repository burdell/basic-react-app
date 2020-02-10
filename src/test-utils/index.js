import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render as rtlRender } from '@testing-library/react';

export function render(children) {
  const history = createMemoryHistory();
  return rtlRender(<Router history={history}>{children}</Router>);
}
