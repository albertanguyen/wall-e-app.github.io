import React, { PureComponent } from "react";
import { 
    Card, 
    ButtonToolbar, 
    Button 
    } from "react-bootstrap";
import MyVerticallyCenteredModal from "../components/verticalmodal";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/candidates.css";

class Candidates extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      candidateId: 0
    };
  }

    modalClose = () => {
        this.setState({ modalShow: false });
    };

  render() {

    // console.log("candidateprops", this.props);
    return (
      <>
        <h3 className="candidatepage-title text-center my-5">
          Find your companions
        </h3>
        <div className="row d-flex justify-content-center mx-5">
          {this.props.candidates.map( element => 
                (<div className="col-lg-4 col-md-6 col-12" style={{ width: 200 }} key={element.id}>
                  <Card className="mb-3">
                    <Card.Img variant="top" src={element.profilePic} />
                    <ButtonToolbar className="justify-content-center mt-2 justify-item-center justify-content-around">
                        <Button
                            onClick={() => this.setState({ modalShow: true })} 
                            onChange={() => this.setState({candidateId: element.id})}
                            style={{ backgroundColor: "#62ccc7", borderColor: "#62ccc7"}}
                            >
                            Full contact
                        </Button>
                          <Link
                              to={`/candidates/${element.id}`}
                              onClick={() => this.props.viewCandidate(element.id)}
                          >
                        <Button 
                            className="view-candidate-btn"
                            onClick={() => this.setState({ modalShow: true })} 
                            style={{ backgroundColor: "black", borderColor: "#62ccc7" }}
                            >
                                Detailed information
                        </Button>
                          </Link>
                        
                    </ButtonToolbar>
                    <Card.Body>
                      <p>Manufatured ID: <strong>{element.fakeId} </strong></p>
                      <Card.Title>{element.firstName}{" "}{element.lastName} - Version: <i>{element.version}</i></Card.Title>
                      <Card.Text style={{ overflowY: "scroll" }}>
                        <p>{element.gender}</p>
                        <p><i>Last latest job:</i> {element.lastJob}</p>
                        <p>{element.gender === "Female" ? "Her" : "His"} slogan:{" "}<q>{element.slogan}</q></p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>)
          )}
        </div>
            <MyVerticallyCenteredModal
                {...this.props}
                show={this.state.modalShow}
                onHide={this.modalClose}
                candidate={this.props.viewCandidate(this.state.candidateId)}
            />

      </>
    );
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
