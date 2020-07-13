import React,{useState} from 'react';
import colorData from "./color-data.json";
import './App.css';

import ColorList from "./components/ColorList.js"

function App() {
  // the second argument in the array returned by useSate() is a function we can use to modify the  state
  const [colors,setColors]=useState(colorData);
  return (
    <div className="App">
      <ColorList 
      colors={colors}
      onRemoveColor={id=>{
        const newColors= colors.filter(color=>color.id !==id);
        setColors(newColors);        
      }}
      onRateColor={(id,rating)=>{
        const newColors=colors.map(color=>
          color.id===id?{...color,rating}:color
          );
          setColors(newColors);
      }}
      />
    </div>
  );
}

export default App;
