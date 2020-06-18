import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
// import { Provider } from 'react-redux';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import configureStore from './store';

const store = configureStore()

const RNRedux = () => (
  <Provider template={AlertTemplate} store = { store }>
    
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);