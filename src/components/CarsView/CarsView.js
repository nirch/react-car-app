import React from 'react';
import {Container, Table} from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Axios from 'axios';


class CarsView extends React.Component {

    constructor(props) {
        super(props);

        // redirectIndex - number - using this state in the redner function 
        //  in order to decided if to redirect or not. If value is -1 not redirecting.
        //  otherwise redirecting to '/cars/${redirectIndex}'
        this.state = {
            redirectIndex: -1,
            locations: []
        }

        this.openCar = this.openCar.bind(this);
    }

    componentDidMount() {

        let geoCodePromises = [];
        this.props.cars.forEach(car => {
            const geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${car.address}&key=AIzaSyAi5g_KBXE7z_IVdXbbr3oJV3E8YUn7Fec`
            geoCodePromises.push(Axios.get(geocodeURL));
            console.log(geocodeURL);
        })

        Promise.all(geoCodePromises).then(responses => {
            let newLocations = [];
            responses.forEach(response => {
                console.log(response.data);
                newLocations.push(response.data.results[0].geometry.location)
            });
            this.setState({
                locations: newLocations
            })
        })
    }


    getHighestKMPerYear() {
        let highestKmPerYear = this.props.cars[0];
        for (let i = 1; i < this.props.cars.length; i++) {
            if (this.props.cars[i].kmPerYear() > highestKmPerYear.kmPerYear()) {
                highestKmPerYear = this.props.cars[i];
            }
        }
        return highestKmPerYear;
    }


    openCar(index) {
        // Redirect to '/cars/index' by updateing the state that will call render again
        // that will render a Redirect componenet
        this.setState({
            redirectIndex: index
        });
    }

    render() {

        if (this.state.redirectIndex !== -1) {
            const redirectPath = `/cars/${this.state.redirectIndex}`
            return <Redirect to={redirectPath}/>
        }

        let contentToRender;
        if (this.props.cars && this.props.cars.length >= 1) {
            // I have cars render a table with cars
            let highestKmPerYear = this.getHighestKMPerYear();

            const carTableRows = this.props.cars.map((car, index) =>
                <tr className={car === highestKmPerYear ? "bg-danger" : ""} onDoubleClick={() => this.openCar(index)}>
                    <td>{car.brand}</td>
                    <td>{car.model}</td>
                    <td>{car.km}</td>
                    <td>{car.year}</td>
                    <td>{parseInt(car.kmPerYear())}</td>
                </tr>);

            contentToRender =                 
                <Table>
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>KM</th>
                            <th>Year</th>
                            <th>Km Per Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carTableRows}
                    </tbody>
                </Table>

        } else {
            // I don't have cars render a message
            contentToRender = 
                <p style={{textAlign: "center"}}>No Cars to Show</p>
        }


        let googleMaps = null;
        if (this.state.locations && this.state.locations.length >= 1) {

            const mapStyles = {
                width: '600px',
                height: '450px',
            };

            
            const markers = this.state.locations.map(location => <Marker position={location}/>)

            googleMaps = 
                <Map
                google={this.props.google}
                zoom={7}
                style={mapStyles}
                initialCenter={{ lat: 31.046051, lng: 34.851612}}>
                    {markers}
                </Map>
        }

        return (
            <Container>
                {contentToRender}
                {googleMaps}
            </Container>        
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAi5g_KBXE7z_IVdXbbr3oJV3E8YUn7Fec'
  })(CarsView);

