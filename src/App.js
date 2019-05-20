import React from 'react';
import './App.css';
import SliderComponent from './components/Slider/Slider'
import Card from './components/card/card'
import Addsanimate from "./components/addsAnimate/index" ;
import CostNotice from "./components/costCalculate_notice";
import  ScrolUp from "./components/scrolUpBtn/ScrolUp"

function App() {
  return (
    <div className="App">
      <SliderComponent />
      <Card/>
      <Addsanimate />
      <ScrolUp />
      <CostNotice />
    </div>
  );
}

export default App;
