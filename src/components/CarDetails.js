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


            <iframe
                width="600"
                height="450"
                frameborder="0"
                style={{border:0}}
                src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyAi5g_KBXE7z_IVdXbbr3oJV3E8YUn7Fec&q=" + car.address}
                allowfullscreen
            >
            </iframe>

        </div>
    )
}

export default CarDetails;