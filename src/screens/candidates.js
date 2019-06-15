import React, { Component } from 'react';
import {
    Card,
    ButtonToolbar,
    Button
} from 'react-bootstrap';
import MyVerticallyCenteredModal from '../components/verticalmodal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/candidates.css';

class Candidates extends Component {
    constructor() {
        super();
        this.state={
            modalPresence: false,   
        }

    }

    modalCloseHandling = () => {
    this.setState({ modalPresence: false });
    }


    render() {
        console.log('candidateprops', this.props)
        return (
            <>
                <h3 className="candidatepage-title text-center my-5">Find your companions</h3>
                <div className="row d-flex justify-content-center mx-5">
                    {this.props.candidates.map(
                        ({
                            id,
                            fakeId,
                            firstName,
                            lastName,
                            gender,
                            profilePic,
                            lastJob,
                            slogan,
                            version,
                        }) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-12" style={{ width: 200 }} key={id}>
                                    <Card className="mb-3">
                                        <Card.Img variant="top" src={profilePic} />
                                        <ButtonToolbar className="justify-content-center mt-2 justify-item-center justify-content-around">
                                            <Button 
                                                onClick={() => this.setState({ modalPresence: true })}
                                                style={{ backgroundColor: "#62ccc7", borderColor: "#62ccc7" }}>Full contact</Button>
                                            <Button 
                                                style={{ backgroundColor: "black", borderColor: "#62ccc7" }}>View Candidate</Button>
                                        </ButtonToolbar>                                        <Card.Body>
                                            <p>Manufatured ID: <strong>{fakeId} </strong></p>
                                            <Card.Title>{firstName} {lastName} - Version: <i>{version}</i></Card.Title>
                                            <Card.Text style={{ overflowY: "scroll" }}>
                                                <p>{gender}</p>
                                                <p><i>Last latest job:</i> {lastJob}</p>
                                                <p>{gender === "Female" ? "Her" : "His"} slogan: <q>{slogan}</q></p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                    )}
                    <MyVerticallyCenteredModal
                        modalShow={this.state.modalPresence}
                        modalClose={ () => this.modalCloseHandling}
                        candidates={this.props.candidates}
                    />
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