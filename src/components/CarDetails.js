import React from 'react';
import { useParams } from 'react-router-dom';

function CarDetails() {

    const { id } = useParams();
    // const id = window.location.href.split("/")[window.location.href.split("/").length - 1];

    return (
       <div>
           car details of {id}
       </div>
    )
}

export default CarDetails;