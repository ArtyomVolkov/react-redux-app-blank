import React from 'react';
import ReactDOM from 'react-dom';

import STORE from './redux-store/index';
// entry point
import AppRoot from './routes/index';

ReactDOM.render(
  <AppRoot store={STORE}/>,
  document.getElementById('app')
);
