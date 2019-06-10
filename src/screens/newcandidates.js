import React, { Component } from 'react';
import {
    Card,
    ButtonToolbar,
    Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class New extends Component {
    render() {
        return (
            <Card className="d-flex d-inline-flex mb-5 mx-5 text-center" style={{ width: "800px" }}>
                <Card.Img className="img-fluid" variant="top" src={'img/Wall-e27.png'} />
                <Card.Body>
                    <Card.Title>bbbbbbbbbbbbb</Card.Title>
                    <Card.Text style={{ overflowY: "scroll" }}>aaaaaaaaaaaaaaaaaa</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default New;