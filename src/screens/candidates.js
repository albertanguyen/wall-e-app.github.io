/* eslint-disable no-undef */
import React, { Component } from 'react';
import {
    Card,
    ButtonToolbar,
    Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewIndividuals from './viewindividuals';
import '../css/candidates.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Candidates extends Component {

    render() {
        return (
            <>
            <h3 className="candidatepage-title text-center my-5">Find your companions</h3>
            <div className="row d-flex justify-content-center mx-5">
                {this.props.candidates.map(
                ({
                id,
                firstName,
                lastName,
                gender,
                profilePic,
                lastJob,
                }) => {
                    return (
                            <div className="col-lg-4 col-md-6 col-12" style={{ width: 200 }} key={id}>
                                <Card className="mb-3">
                                    <Card.Img variant="top" src={profilePic} />
                                    <ButtonToolbar className="justify-content-center mt-2 justify-item-center">
                                        <Button style={{ backgroundColor: "#62ccc7", borderColor: "#62ccc7" }}>Update Candidate</Button>
                                        <Button style={{ backgroundColor: "black", borderColor: "#62ccc7" }}>View Candidate</Button>
                                    </ButtonToolbar>

                                    <Card.Body>
                                        <p>{id}</p>
                                        <Card.Title>{firstName} {lastName}</Card.Title>
                                        <Card.Text style={{ overflowY: "scroll" }}>
                                            <p>{gender}</p>
                                            <p>{lastJob}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
            )}
            )}
            </div>   
            </>     
        )
    }

    // renderOnscreen() {
    //     if (this.props.length > 0) {
    //         return (
    //             <div style={{ backgroundColor: "black" }}>
    //                 <h1 className="title">Candidates</h1>
    //                 <div >
    //                     {this.render()}
    //                 </div>
    //             </div>

    //         )
    //     }
    //     return <div>No Candidates</div>
    // }
}


export default Candidates;