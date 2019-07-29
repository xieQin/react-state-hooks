import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './components/test'
import Calculator from './components/calculator'
import Example from './components/example'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Test name="hello world"/>
      </header>
      <Calculator/>
      <Example/>
    </div>
  );
}

export default App;
