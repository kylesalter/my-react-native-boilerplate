import '../Config';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DebugConfig from '../Config/DebugConfig';
import RootContainer from './RootContainer';
import createStore from '../Redux';
import AppConfig from '../Config/AppConfig';

// create our store
const store = createStore();

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
const App = () => (
  <Provider store={store}>
    <RootContainer />
  </Provider>
);

// allow reactotron overlay for fast design in dev mode
// eslint-disable-next-line
export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);
