import { signOut } from "firebase/auth";
import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  }

 

  return (
    <div className="header-container text-white">
      <div className="pt-2">
        <Navbar variant="light" expand="lg">
          <Container>
            <Navbar.Brand className="fw-bolder fs-3" as={Link} to="/">
                TRAVEL GURU
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Form className="d-flex me-3">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-light">Search</Button>
                </Form>
                <Nav.Link href="#action1">News</Nav.Link>
                <Nav.Link href="#">Destination</Nav.Link>
                <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>
              {
                user ? 
                <Nav>
                  <button onClick={logOut} className="btn btn-outline-primary">Log Out</button>
                </Nav> : 
                <Nav>
                  <Link className="btn btn-outline-primary" to='/login'>Login</Link>
                </Nav>
              }
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
