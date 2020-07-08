import React from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from "./components/StarRating"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hola vale</h1>
        <StarRating totalStar={5} 
          style={{backgroundColor:"lightblue"}}
          onDoubleClick={e=>alert("double click")}
        />
      </header>
      
    </div>
  );
}

export default App;
