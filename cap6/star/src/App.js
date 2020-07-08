import React,{useState} from 'react';
import colorData from "./color-data.json";
import './App.css';

import ColorList from "./components/ColorList.js"

function App() {
  const [colors]=useState(colorData);
  return (
    <div className="App">
      <ColorList colors={colors}/>
    </div>
  );
}

export default App;
