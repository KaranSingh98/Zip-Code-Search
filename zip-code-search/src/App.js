import React from 'react';
import logo from './logo.svg';
import './App.css';
import ZipCode from './components/zipCode.js';

function App() {
  return (
    <div className="App">
      <header className="App-header"/>
        <h1> Zip Code Search </h1>
        <ZipCode/>
    </div>
  );
}

export default App;
