import React, { Component } from 'react';
import './App.css';
import Route  from './Routing/Route'
import {Provider } from 'react-redux'
import store from './Publics/redux/store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route />  
        </Provider>
    );
  }
}

export default App;
