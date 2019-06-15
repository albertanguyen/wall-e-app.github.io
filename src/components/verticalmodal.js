import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Navbar, Form, Image, Col, Nav, Modal } from "react-bootstrap";
import "../css/verticalmodal.css";

class MyVerticallyCenteredModal extends Component {

  render() {
    console.log("modal props", this.props);

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{ backgroundColor: "#282c34" }} closeButton>
          <Navbar variant="dark">
            <Nav className="mr-auto" />
            {/* Render Last name, prounounce and his/her avatar here */}
            {/* <Form.Row>
              <Image
                className="profilepic"
                src={this.props.profilePic}
                roundedCircle
              />
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="title" inline>
                  {this.props.gender === "Female" ? "Ms." : "Mr."}{" "}
                  {this.props.lastName}
                </Form.Label>
              </Form.Group>
            </Form.Row> */}
          </Navbar>
        </Modal.Header>
        <Modal.Body>
                {/* render contact list here from App.js */}
          {/* <ul>
            <li>{this.props.candidates.email}</li>
            <li>{this.props.candidates.city}</li>
            <li>{this.props.candidates.phone}</li>
            <li>{this.props.candidates.streetAddress}</li>
            <li>{this.props.candidates.postalCode}</li>
            <li>{this.props.candidates.country}</li>
          </ul> */}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#282c34" }}>
          <Navbar variant="dark">
            <Button
              className="mr-auto"
              onClick={this.props.modalClose}
              variant="outline-info"
            >
              F&F Contact
            </Button>
          </Navbar>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default MyVerticallyCenteredModal;
