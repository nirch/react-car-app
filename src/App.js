import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CarModel from './data-model/CarModel'
import CarsView from './components/CarsView/CarsView';

function App() {

  const carsData = [];
  carsData.push(new CarModel("Toyota", "Yaris", 2002, 230000));
  carsData.push(new CarModel("Toyota", "Corola", 2015, 105000));
  carsData.push(new CarModel("Hyundai", "i30", 2010, 150000));

  return (
    <div>
      <CarsView cars={carsData}/>
    </div>
  );
}

export default App;
