import React from 'react';
import './App.css';
import ListComponent from './components/listComponent/listComponent';
import MaterialComponent from './components/materialComponent/materialComponent';

function App() {
  return (
    <div className="App" data-testid="app">
      <MaterialComponent/>
      <hr></hr>
      <ListComponent/>
    </div>
  );
}

export default App;
