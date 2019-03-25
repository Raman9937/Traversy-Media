import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './components/Store';
import './App.css';
import Posts from './components/Posts';
import AddPost from './components/AddPost';


class App extends Component {
 
  render() {
    return (
     <Provider store={store}>
      <AddPost/>
          <div className="App">
          
          </div>
          <Posts/>
      </Provider>
    );
  }
}

export default App;
