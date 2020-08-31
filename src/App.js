import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CarModel from './data-model/CarModel'
import CarsView from './components/CarsView/CarsView';
import axios from 'axios';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CarDetails from './components/CarDetails';

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
        cars: response.data.map(plainCar => new CarModel(plainCar.brand, plainCar.model, plainCar.year, plainCar.km, plainCar.address))
      })
    })

  }


  render() {
    return (
      <div>
        {/* If I redner something before the router it will be rendered always (in any route) */}
        {/* <p>bla bla bla</p> */}
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/cars">
              <CarsView cars={this.state.cars} />
            </Route>
            <Route exact path="/cars/:id">
              {this.state.cars.length > 0 ? <CarDetails cars={this.state.cars} /> : null}
            </Route>
          </Switch>
        </HashRouter>
      </div>
    );

  }
}

export default App;
