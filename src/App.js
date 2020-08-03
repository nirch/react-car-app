import React from 'react';
import './App.css';
import CarModel from './data-model/CarModel'
import CarsView from './components/CarsView/CarsView';

function App() {

  const myCar = new CarModel("Toyota", "Yaris", 2002, 230000);
  console.log(myCar);
  console.log(myCar.kmPerYear());

  return (
    <div>
      <CarsView/>
    </div>
  );
}

export default App;
