import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";

import "./myNavbar.css";

import logoSvg from "../../assets/icons/logo.svg";
import nameWebsiteSvg from "../../assets/icons/nameWebsite.svg";

function MyNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="my-navbar" id="my-navbar">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logoSvg} className="d-block mx-auto logo-nav" />
            <img
              src={nameWebsiteSvg}
              className="name-webite d-block name-website-nav"
            />
          </Navbar.Brand>

          <Navbar.Toggle className="border-0" onClick={handleShow} />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            className="flex-grow-0 w-100"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                <img src={logoSvg} className="d-block mx-auto logo-nav" />
                <img
                  src={nameWebsiteSvg}
                  className="name-webite d-block name-website-nav"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <Nav.Link href="#hero-section" onClick={handleClose}>
                  Home
                </Nav.Link>
                <Nav.Link href="#how-works-section" onClick={handleClose}>
                  About
                </Nav.Link>
                <Nav.Link href="#banner-section" onClick={handleClose}>
                  Service
                </Nav.Link>
                <Nav.Link href="#best-deals-section" onClick={handleClose}>
                  New Property
                </Nav.Link>
                <Nav.Link href="#footer" onClick={handleClose}>
                  Contact
                </Nav.Link>
                <Button
                  className="btn-nav d-block d-lg-none"
                  onClick={handleClose}
                >
                  Login
                </Button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

          <Button className="btn-nav d-none d-lg-block">Login</Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
