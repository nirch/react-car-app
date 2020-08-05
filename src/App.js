import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CarModel from './data-model/CarModel'
import CarsView from './components/CarsView/CarsView';

class App extends React.Component {

  constructor(props) {
    super(props);

    const carsData = [];
    carsData.push(new CarModel("Toyota", "Yaris", 2002, 230000));
    carsData.push(new CarModel("Toyota", "Corola", 2015, 105000));
    carsData.push(new CarModel("Hyundai", "i30", 2010, 150000));

    this.state = {
      cars: carsData
    }
  
  }


  render() {
    return (
      <div>
        <CarsView cars={this.state.cars}/>
      </div>
    );
  
  }
}

export default App;
