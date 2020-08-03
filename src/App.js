import React from 'react';
import './App.css';
import CarModel from './data-model/CarModel'

function App() {

  const myCar = new CarModel("Toyota", "Yaris", 2002, 230000);
  console.log(myCar);
  console.log(myCar.kmPerYear());

  return (
    <div>
      Car App
    </div>
  );
}

export default App;
