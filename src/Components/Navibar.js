import React, {useState} from 'react';
import {Button, Container, Modal, Nav, Navbar, NavbarBrand, NavLink, Form, ModalBody} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {Link} from "react-router-dom";
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
//import ModalBody from "react-bootstrap";

const NaviBar = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
          <Navbar collapseOnSelect expand={"lg"} bg={'dark'} variant={'dark'} >
              <Container>
              <NavbarBrand>ALTUNIN</NavbarBrand>
              <NavbarToggle aria-controls="responsive-navbar-nav" />
              <NavbarCollapse id="responsive-navbar-nav" >
                  <Nav className="mr-auto">
                      <NavLink><Link to="/">Home</Link></NavLink>
                      <NavLink><Link to="/sale">Sale</Link></NavLink>
                      <NavLink><Link to="/catalog">Catalog</Link></NavLink>
                  </Nav>
                  <Nav>
                      <Button variant="primary" onClick={handleShow} className="mr-2" >Log in</Button>
                      <Button variant="primary" onClick={handleShow} >Sign out</Button>
                  </Nav>
              </NavbarCollapse>
              </Container>
          </Navbar>
          <Modal show={show} onHide={handleClose}>
              <ModalHeader closeButton>
                  <ModalBody>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                          <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                          </Form.Text>
                     </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                       <Form.Group controlId="formBasicCheckbox">
                         <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                             <Button variant="primary" type="submit">
                                     Submit
                              </Button>
                      </Form>
                  </ModalBody>
              </ModalHeader>
          </Modal>
        </>
    )
}

export default NaviBar;