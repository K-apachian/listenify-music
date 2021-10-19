import React, { useState } from "react";
import { Card, Container, Row, Col, Button, Spinner } from "react-bootstrap";
import "../mystyles/Home.css";
import { Link } from "react-router-dom";
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

const AnimateHome = styled.div`
  animation: 1.5s ${keyframes`${zoomInUp}`};
`;

const Home = () => {
  const [loading, setLoading] = useState(true);

  console.log("component rendered 1st time");

  return (
    <div className="home">
      {!loading ? (
        <h1>
          Loading...
          <Spinner animation="border" variant="danger" />
        </h1>
      ) : (
        <Container fluid className="homecontainer">
          <AnimateHome>
            <Row className="p-4 g-4" style={{ textAlign: "center" }}>
              <Col>
                <Card className="mycard">
                  <Card.Body>
                    <Link to="/SongList">
                      <Button size="lg" variant="outline-info">
                        Let's Rock..
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="m-3" style={{ textAlign: "center" }}>
              <Col>
                <Card className="mycard">
                  <Card.Body>
                    <div>
                      <h2 className="quote">
                        “Music is moonlight in the <br />
                        gloomy night of life..” ― Jean Paul
                      </h2>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </AnimateHome>
        </Container>
      )}
    </div>
  );
};


export default Home;
