import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../mystyles/ReachUs.css";
import developer from "../images/developer.jpg";
import * as FaIcons from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import {
  pulse,
  tada,
  lightSpeedIn,
  rollIn,
  bounce,
  bounceIn,
  rubberBand,
  fadeIn,
  flash,
  zoomInUp,
  slideInUp,
  jello,
  swing,
} from "react-animations";

const AnimateReach = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
`;

const ReachUs = () => {
  return (
    <div className="reachpage">
      <AnimateReach>
        <Container fluid className="reachcontainer">
          <Row style={{ textAlign: "center" }}>
            <Col md={12}>
              <h1 className="reachhead">Developed By</h1>
            </Col>
          </Row>
          <Row className="m-1" style={{ textAlign: "center" }}>
            <Col>
              <Card
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  width: "15rem",
                  margin: "auto",
                  borderRadius: "145px",
                }}
              >
                <Card.Img
                  variant="top"
                  style={{ borderRadius: "145px" }}
                  src={developer}
                />
                <Card.Text>
                  <b>Kartik Telikicherla</b>
                </Card.Text>
              </Card>
            </Col>
          </Row>
          <Row className="m-1" style={{ textAlign: "center" }}>
            <Col></Col>
            <Col md={6}>
              <Card border="warning" className="reachcard">
                <Card.Body>
                  <Card.Text>
                    <h4>
                      An Enthusiastic Full Stack Developer who loves to create
                      futuristic and responsive web applications..
                    </h4>
                    <br />
                    <h4>
                      {" "}
                      He Loves to work on REACT + SPRINGBOOT based
                      applications..
                    </h4>
                    <br />
                    <h4>Follow Me At:</h4>
                    <br />
                    <ul class="nav justify-content-center">
                      <a
                        href="https://www.facebook.com/shiv.kameshwara/"
                        class="nav-link"
                      >
                        <i>
                          <FaIcons.FaFacebookF />
                        </i>
                      </a>
                      <a
                        href="https://www.instagram.com/kartiktelikicherla/"
                        class="nav-link"
                      >
                        <i>
                          <FaIcons.FaInstagram />
                        </i>
                      </a>
                      <a
                        href="https://twitter.com/KTelikicherla"
                        class="nav-link"
                      >
                        <i>
                          <FaIcons.FaTwitter />
                        </i>
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCUGslPo3bLNMs2gVNhld0MA"
                        class="nav-link"
                      >
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
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </AnimateReach>
    </div>
  );
};

export default ReachUs;
