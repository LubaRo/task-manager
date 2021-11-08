import React from 'react';
import { Provider } from 'react-redux';

import store from 'store';
import TaskBoard from 'components/TaskBoard';

const App = () => (
  <Provider store={store}>
    <TaskBoard />
  </Provider>
);

export default App;
