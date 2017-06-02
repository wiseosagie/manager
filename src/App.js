import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import Router from './Router';

class App extends Component {
  componentWillMount(){
    const config = {
    apiKey: 'AIzaSyCgYo5ov7y_9Ng3Nx7rmrS4uDCJs1zuxao',
    authDomain: 'manager-a0859.firebaseapp.com',
    databaseURL: 'https://manager-a0859.firebaseio.com',
    storageBucket: 'manager-a0859.appspot.com',
    messagingSenderId: '1056177372239'
  };
  firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
