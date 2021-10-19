import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../mystyles/InfoPage.css";
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

const AnimateInfo = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
`;

const InfoPage = () => {
  return (
    <div className="infopage">
      <AnimateInfo>
        <Container fluid className="infocontainer">
          <Row className="mt-2" style={{ textAlign: "center" }}>
            <Col md={12}>
              <h1 className="abouthead">About App</h1>
            </Col>
          </Row>
          <Row style={{ textAlign: "center" }}>
            <Col></Col>
            <Col md={6}>
              <Card border="warning" className="aboutcard">
                <Card.Body>
                  <Card.Text>
                    <h4>
                      This Awesome Music Player Application lets you listen to
                      songs on an instant click.
                    </h4>
                    <br />
                    <h4>
                      You can
                      <b>
                        <i> Add </i>
                      </b>
                      Songs,
                      <b>
                        <i> Update </i>
                      </b>
                      Songs,and also you can
                      <b>
                        <i> Delete </i>
                      </b>
                      Songs.!
                    </h4>
                    <br />
                    <h4>Wanna Have Experience??</h4>
                    <br />
                    <Link to="/SongList">
                      <Button size="lg" variant="outline-info">
                        Rock In
                      </Button>
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </AnimateInfo>
    </div>
  );
};

export default InfoPage;
