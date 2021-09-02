import React from 'react';

import Sidebar from './components/Sidebar';
import Video from './components/Video';
import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    < Provider store={store}>
      <Video />
      <Sidebar />
    </Provider>
  );
}

export default App;
