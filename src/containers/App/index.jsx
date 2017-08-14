import React from 'react';
import { Route, Link } from 'react-router-dom';

import MultiDispatch from 'containers/MultiDispatch';
import UpdateStateAndProps from 'containers/UpdateStateAndProps';

export default function App() {
  return (
    <div>
      <Link to="/multi_dispatch">Multi Dispatch Test</Link>
      <Link to="/update_state_and_props">StateAndPropsUpdate</Link>

      <Route path="/multi_dispatch" component={MultiDispatch} />
      <Route path="/update_state_and_props" component={UpdateStateAndProps} />
    </div>
  );
}
