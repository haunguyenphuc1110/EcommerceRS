import appReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

const storeFactory = () => {
  
  const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: []
  };  

  const pReducer = persistReducer(persistConfig, appReducer);

  let composeEnhancers = compose;

  if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(pReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
	return store;
};

export const store = storeFactory();
export const persistor = persistStore(store);