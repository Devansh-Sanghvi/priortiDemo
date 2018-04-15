import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {StatusBar} from 'react-native'
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {

  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>

        <Router>
        <StatusBar
           barStyle="light-content"
           translucent={true}
           backgroundColor="transparent"
         />
        </Router>
      </Provider>
    );
  }
}

export default App;
