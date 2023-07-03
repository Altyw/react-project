import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Headers = () => {
  return (
    <div>
      {" "}
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home" className="text-light">
            Navbar with text
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-light">
              Signed in as:{" "}
              <a href="#login" className="text-light">
                Vin Diesel
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Headers;
