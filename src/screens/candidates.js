import React, { Component } from 'react';
import {
    Card,
    ButtonToolbar,
    Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewIndividuals from './viewindividuals';
import '../css/candidates.css';

class Candidates extends Component {

    render() {
        console.log('from candidates component',this.props)
        let {
            id,
            firstName,
            lastName,
            gender,
            profilePic,
            lastJob } = this.props  

        return (
            <Card className="mb-3">
                <Card.Img className="img-fluid" variant="top" src={profilePic} />
                <ButtonToolbar className="justify-content-center mt-2 justify-item-center">
                    <Button style={{ backgroundColor: "#62ccc7", borderColor: "#62ccc7" }}>Update Candidate</Button>
                    <Button style={{ backgroundColor: "black", borderColor: "#62ccc7" }} onClick={() => this.props.viewCandidate(id)}>View Candidate</Button>
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
        )
    }

    renderOnscreen() {
        if (this.props.length > 0) {
            return (
                <div style={{ backgroundColor: "black" }}>
                    <h1 className="title">Candidates</h1>
                    <div >
                        {this.render()}
                    </div>
                </div>

            )
        }
        return <div>No Candidates</div>
    }
}


export default Candidates;