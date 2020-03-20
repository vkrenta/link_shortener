import React from 'react';
import 'materialize-css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import useRoutes from './routes';

const App = () => {
  let store = createStore(rootReducer);
  return (
    <Provider store={store}>
      <div className="container">
        <BrowserRouter>
          <div>{useRoutes(false)}</div>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
