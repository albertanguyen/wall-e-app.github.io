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
///////////////////////////KHOA ADDED <3///////////////////////////////////////
    candidateList = () => {
        console.log("WATER")
        return this.props.candidateList.map(({
            id,
            first_name,
            last_name,
            gender,
            profile_pic_url,
            country }) => {
            return (
                <Card className="mb-3"  style={{ width: '18rem', marginTop: "10px", marginBottom: "30px" }} key={id}>
                    <Card.Img  variant="top" src={profile_pic_url}/>
                    <ButtonToolbar className="justify-content-center mt-2 justify-item-center">
                        <Button style={{ backgroundColor: "#62ccc7", borderColor: "#62ccc7" }}>Update Candidate</Button>
                        <Button style={{ backgroundColor: "black", borderColor: "#62ccc7" }} onClick={() => this.props.viewCandidate(id)}>View Candidate</Button>
                    </ButtonToolbar>

                    <Card.Body>
                        <p>{id}</p>
                        <Card.Title>{first_name} {last_name}</Card.Title>
                        <Card.Text style={{ overflowY: "scroll" }}>
                            <p>{gender} <br/>
                            {country} </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        }
        )
    }
/////////////////////////////////////////////////////////////////////

    render() {
console.log("this.props.candidateList", this.props.candidateList)
        return (
            <div>
                {this.candidateList()}
            </div>
        )
    }
//KHOA COMMENTED IT OUT
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