import React from 'react';
import { useParams } from 'react-router-dom';

function CarDetails(props) {

    debugger;
    const { cars } = props;
    const { id } = useParams();
    const car = cars[id];
    // const id = window.location.href.split("/")[window.location.href.split("/").length - 1];

    return (
       <div>
           <p>Model: {car.model}</p>
           <p>Brand: {car.brand}</p>
           <p>Year: {car.year}</p>
           <p>KM: {car.km}</p>
           <p>KM Per Year: {car.kmPerYear()}</p>
           <p>Address: {car.address}</p>
       </div>
    )
}

export default CarDetails;