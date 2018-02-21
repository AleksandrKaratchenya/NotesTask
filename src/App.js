import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom"
import Register from './components/Register'
import LoginComp from './components/Login'
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1 className="App-title">Welcome tototoot</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }

  class App extends Component {
    render() {
      return (
      <LoginComp />
      );
    }
  }

//export const element = <h1>Hello, world</h1>;
//module.exports = element;
export default App;
