import React, { Component } from "react";
import { Card, ButtonToolbar, Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "../components/verticalmodal";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/candidates.css";

class Candidates extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false,
    };
  }

  render() {
    let modalClose = () => {
      this.setState({ modalShow: false });
    };

    console.log("candidateprops", this.props);
    return (
      <>
        <h3 className="candidatepage-title text-center my-5">
          Find your companions
        </h3>
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
              email,
              city,
              phone,
              streetAddress,
              postalCode,
              country,
            }) => {
              return (
                <div
                  className="col-lg-4 col-md-6 col-12"
                  style={{ width: 200 }}
                  key={id}
                >
                  <Card className="mb-3">
                    <Card.Img variant="top" src={profilePic} />
                    <ButtonToolbar className="justify-content-center mt-2 justify-item-center justify-content-around">
                      <Button
                        onClick={() => this.setState({ modalShow: true })}
                        style={{
                          backgroundColor: "#62ccc7",
                          borderColor: "#62ccc7",
                        }}
                      >
                        Full contact
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "black",
                          borderColor: "#62ccc7",
                        }}
                      >
                        View Candidate
                      </Button>
                    </ButtonToolbar>
                    <Card.Body>
                      <p>
                        Manufatured ID: <strong>{fakeId} </strong>
                      </p>
                      <Card.Title>
                        {firstName} {lastName} - Version: <i>{version}</i>
                      </Card.Title>
                      <Card.Text style={{ overflowY: "scroll" }}>
                        <p>{gender}</p>
                        <p>
                          <i>Last latest job:</i> {lastJob}
                        </p>
                        <p>
                          {gender === "Female" ? "Her" : "His"} slogan:{" "}
                          <q>{slogan}</q>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                      <MyVerticallyCenteredModal
                          show={this.state.modalShow}
                          onHide={modalClose}
                          lastName={id ? lastName : null}
                          profilePic={id ? profilePic : null}
                          email={id ? email : null}
                          gender={id ? gender : null}
                          city={id ? city : null}
                          phone={id ? phone : null}
                          streetAddress={id ? streetAddress : null}
                          postalCode={id ? postalCode : null}
                          country={id ? country : null}
                      />
                </div>
              );
            }
          )}
        </div>
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
