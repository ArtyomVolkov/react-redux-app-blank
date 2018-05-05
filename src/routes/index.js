import React from 'react';
import { Provider } from 'react-redux';
// web components
import Page from '../app/layout/Page';

function AppRoot ({ store }) {
  return (
    <Provider store={store}>
      <Page/>
    </Provider>
  );
}

export default AppRoot;
