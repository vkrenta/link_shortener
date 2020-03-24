import React from 'react';
import 'materialize-css';
import { Provider, useSelector } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import UseRoutes from './routes';
import createSagaMiddleWare from 'redux-saga';
import { watchRegister } from './sagas/register.sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import watchError from './sagas/errorToast.sagas';

const App = () => {
  const sagaMiddleWare = createSagaMiddleWare();
  let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
  );
  //const user = useSelector((state: any) => state.currentUser);
  console.log(store.getState());

  sagaMiddleWare.run(watchRegister);
  sagaMiddleWare.run(watchError);
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <div>
            <UseRoutes />
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
