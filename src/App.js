import React from 'react';
import './App.css';
import SliderComponent from './components/Slider/Slider'
import Card from './components/card/card'
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <div className="App">
      <SliderComponent />
      <Card/>
      <Navbar/>
    </div>
  );
}

export default App;
