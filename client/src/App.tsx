import React from 'react';
import 'materialize-css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import useRoutes from './routes';
import createSagaMiddleWare from 'redux-saga';
import { watchRegister } from './sagas/register.sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

const App = () => {
  const sagaMiddleWare = createSagaMiddleWare();
  let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
  );

  store.subscribe(console.log);

  sagaMiddleWare.run(watchRegister);
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
