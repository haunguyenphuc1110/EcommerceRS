import React from 'react';
import {AppRegistry, ActivityIndicator} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/configureStore';
import { PersistGate } from 'redux-persist/lib/integration/react';

const MyApp = () => (
  <Provider store={store}>
      <PersistGate 
        persistor={persistor}
      >
        <App/>
      </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => MyApp);