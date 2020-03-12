import React, {Component} from 'react';
import Screen from './src/Screen';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import reducer from './src/reducer';

const rootReducer = combineReducers({
  calculator: reducer,
});

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Screen />
      </Provider>
    );
  }
}

export default App;
