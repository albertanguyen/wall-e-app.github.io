import React from "react";
import { 
    Navbar,
    Nav, 
    Form,
    FormControl, 
    Button 
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/navbar.css';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home"><img src={'img/Wall-e27.png'} className="navbar-brand" alt="logo" /></Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="nav-menu" href="#home">Home</Nav.Link>
        <Nav.Link className="nav-menu" href="#features">Candidates</Nav.Link>
        <Nav.Link className="nav-menu" href="#pricing">Update Candidates</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button className="search-Btn" variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
};

export default NavbarComponent;
