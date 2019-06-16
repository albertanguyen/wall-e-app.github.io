import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { 
  Button, 
  Navbar, 
  Form, 
  FormControl,
  Image, 
  Col, 
  Nav, 
  Modal } from "react-bootstrap";
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
            <Form inline>
              {/* Render Last name, prounounce and his/her avatar here */}
              <Image
                className="profilepic"
                src={this.props.candidate.profilePic}
                roundedCircle
              />
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="title" inline>
                  {this.props.candidate.gender === "Female" ? "Ms." : "Mr."}{" "}
                  {this.props.candidate.lastName}
                </Form.Label>
              </Form.Group>
            </Form>
          </Navbar>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Contact information</Form.Label>
            {/* render contact list here from App.js */}
            <ul>
              <li>Email: {this.props.email ? this.props.email : "Request extra info"}</li>
              <li>City: {this.props.city ? this.props.city : "Request extra info"}</li>
              <li>Phone: {this.props.phone ? this.props.phone : "Request extra info"}</li>
              <li>{(this.props.streetAddress && this.props.postalCode && this.props.country) 
                ? this.props.streetAddress + ", " + this.props.postalCode + ", " + this.props.country 
                : <a href="#">"Request extra info"</a>}
              </li>
          </ul>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#282c34" }}>
          <Navbar variant="dark">
            <Button
              className="mr-auto"
              onClick={this.props.onHide}
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