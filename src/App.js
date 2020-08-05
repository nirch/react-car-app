import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CarModel from './data-model/CarModel'
import CarsView from './components/CarsView/CarsView';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cars: []
    }
  
  }

  componentDidMount() {

    axios.get("cars.json").then(response => {
      // console.log(response.data);
      this.setState({
        cars: response.data.map(plainCar => new CarModel(plainCar.brand, plainCar.model, plainCar.year, plainCar.km))
      })
    })

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
