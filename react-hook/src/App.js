import React from 'react';
import Program from './Program';
import SayHello from './TwoPrograms';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <h1>React Hooks</h1>
      < Program />
    </div> 

< SayHello />
</>
  );
}

export default App;
