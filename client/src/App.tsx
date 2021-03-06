import React from 'react';
import 'materialize-css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { BrowserRouter } from 'react-router-dom';
import UseRoutes from './routes';
import createSagaMiddleWare from 'redux-saga';
import { watchRegister } from './sagas/register.sagas';
import { composeWithDevTools } from 'redux-devtools-extension';
import watchError from './sagas/errorToast.sagas';
import watchLogin from './sagas/login.sagas';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { PersistGate } from 'redux-persist/integration/react';
import { watchAlert } from './sagas/alert.sagas';
import { watchToken } from './sagas/authenticate.sagas';
import watchCurrentLink from './sagas/createLink.sagas';
import { loadLinksWatch } from './sagas/loadLinks.sagas';
import watchUserInfo from './sagas/userInfo.sagas';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const App = () => {
  const sagaMiddleWare = createSagaMiddleWare();

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
  );

  const persistor = persistStore(store);

  sagaMiddleWare.run(watchRegister);
  sagaMiddleWare.run(watchError);
  sagaMiddleWare.run(watchLogin);
  sagaMiddleWare.run(watchAlert);
  sagaMiddleWare.run(watchToken);
  sagaMiddleWare.run(watchCurrentLink);
  sagaMiddleWare.run(loadLinksWatch);
  sagaMiddleWare.run(watchUserInfo);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <BrowserRouter>
            <div>
              <UseRoutes />
            </div>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
