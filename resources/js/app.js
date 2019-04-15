
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

//require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//require('./components/main');

import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './components/store/createstore';
import Main from './components/main';
import { Provider } from 'react-redux';
import localforage from 'localforage';
import * as types from './components/actions';
const setLocalForageToken = token => {
  if (window._.isEmpty(token)) {
    localforage.removeItem('authtoken', token);
  }

  localforage.setItem('authtoken', token);
};

const setUserData = user => ({
  type: types.SET_USER,
  user
});

const setAuthenticated = authenticated => ({
  type: types.SET_AUTHENTICATED,
  authenticated
});

const setHttpToken = (token) => {
  if (window._.isEmpty(token)) {
    window.axios.defaults.headers.common['Authorization'] = null;
  }

  window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
};

const setToken = token => {
  setLocalForageToken(token);
  setHttpToken(token);
};

const token = localStorage.getItem('authtoken');

if(token){
  setToken(token);
  store.dispatch(setUserData(null));
  store.dispatch(setAuthenticated(true));
}

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('example')
);

