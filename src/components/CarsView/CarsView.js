import React from 'react';


class CarsView extends React.Component {

    // constructor(props) {
    //     super(props);
    // }


    // getHighestKMPerYear() {
    //     let highestKmPerYear = this.props.cars[0];
    //     for (let i = 1; i < this.props.cars.length; i++) {
    //         if (this.props.cars[i].kmPerYear() > highestKmPerYear.kmPerYear()) {
    //             highestKmPerYear = this.props.cars[i];
    //         }
    //     }
    //     return highestKmPerYear;
    // }

    render() {

        // let contentToRender;
        // if (this.props.cars && this.props.cars.length >= 1) {
        //     // I have cars render a table with cars
        //     let highestKmPerYear = this.getHighestKMPerYear();

        //     const carTableRows = this.props.cars.map(car =>
        //         <tr className={car === highestKmPerYear ? "bg-danger" : ""}>
        //             <td>{car.brand}</td>
        //             <td>{car.model}</td>
        //             <td>{car.km}</td>
        //             <td>{car.year}</td>
        //             <td>{parseInt(car.kmPerYear())}</td>
        //         </tr>);

        //     contentToRender =                 
        //         <table class="table">
        //             <thead>
        //                 <th>Brand</th>
        //                 <th>Model</th>
        //                 <th>KM</th>
        //                 <th>Year</th>
        //                 <th>Km Per Year</th>
        //             </thead>
        //             <tbody>
        //                 {carTableRows}
        //             </tbody>
        //         </table>


        // } else {
        //     // I don't have cars render a message
        //     contentToRender = 
        //         <p style={{textAlign: "center"}}>No Cars to Show</p>
        // }

        return (
            <div>
                Cars View
            </div>
        );
    }
}

export default CarsView;
