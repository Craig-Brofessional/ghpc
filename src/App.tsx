import React from 'react';
import logo from './logo.svg';
import './App.css';
import './output.css';
import { PushupsHome } from './pushups/pushups-home';

{/* <link href="./output.css" rel="stylesheet"></link> */}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      { <PushupsHome />}
    </div>
  );
}

export default App;
