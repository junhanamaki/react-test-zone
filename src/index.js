import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'containers/App';
import { init } from 'store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={init()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
