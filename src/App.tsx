import * as React from 'react';
import './App.css';
import Test from './components/test'
import Calculator from './components/calculator'
import Example from './components/example'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('./logo.svg')} className="App-logo" alt="logo" />
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
      </header>
      <Test name="hello world"/>
      <Calculator/>
      <Example/>
    </div>
  );
}

export default App;
