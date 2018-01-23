import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './CardList';

class App extends Component {
  render() {
    return (
      <div className="App">
         
         <div className="flex-container">

         <CardList />

          </div>

      </div>
    );
  }
};

export default App;
