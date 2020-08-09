import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

function HomePage() {
    return (
        <Jumbotron>
            <h1>Cars App</h1>
            <p>
                Amazing car app!! :)
            </p>
            <p>
                <Button variant="primary" href="#/cars">Enter</Button>
            </p>
        </Jumbotron>
    )
}

export default HomePage;