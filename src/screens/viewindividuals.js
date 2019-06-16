import React from 'react';
import {
    Card,
    ButtonToolbar,
    Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

 const View = (props) => {

        return (
            <Card className="d-flex d-inline-flex mb-5 mx-5 text-center" style={{ width: "800px" }}>
                <Card.Img className="img-fluid" variant="top" src={props.candidate.profilePic} />
                <Card.Body>
                    <Card.Title>{props.candidate.firstName} {props.candidate.lastName}</Card.Title>
                    <Card.Text style={{ overflowY: "scroll" }}>{props.candidate.gender}</Card.Text>
                </Card.Body>

            </Card>
        )
    }


export default View;