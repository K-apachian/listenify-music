import React, { useState } from "react";
import { Modal, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import listenmusic from "../images/listenmusic.jpg";
import * as FaIcons from "react-icons/fa";
import "../mystyles/AboutPlayer.css";

const AboutPlayer = ({ ...props }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{ backgroundColor: "crimson" }} closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>
              <b>Welcome</b>
            </h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col style={{ textAlign: "center" }}>
                <h3>Get Connected With Us !</h3>
                <Card className="myaboutcard">
                  <Card.Body>
                    <Row className="mb-5">
                      <h4 className="aboutcard-signup">New User ! Sign Up</h4>
                      <Link to="/register">
                        <Button
                          variant="outline-primary"
                          onClick={props.onHide}
                        >
                          Sign Up
                        </Button>
                      </Link>
                    </Row>
                    <hr style={{ color: "black" }} />
                    <Row className="mb-5">
                      <h4 className="aboutcard-login">Already a User? Sign In</h4>
                      <Link to="/login">
                        <Button variant="outline-dark" onClick={props.onHide}>
                          Sign In
                        </Button>
                      </Link>
                    </Row>
                    <ul class="nav justify-content-center">
                      <a class="nav-link">
                        <i>
                          <FaIcons.FaFacebookF />
                        </i>
                      </a>
                      <a class="nav-link">
                        <i>
                          <FaIcons.FaInstagram />
                        </i>
                      </a>
                      <a class="nav-link">
                        <i>
                          <FaIcons.FaTwitter />
                        </i>
                      </a>
                      <a class="nav-link">
                        <i>
                          <FaIcons.FaYoutube />
                        </i>
                      </a>
                      <a class="nav-link">
                        <i>
                          <FaIcons.FaWhatsapp />
                        </i>
                      </a>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="aboutcard-image">
                <img
                  src={listenmusic}
                  style={{ width: "100%", height: "100%" }}
                />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AboutPlayer;
