import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import errorimg from "../images/error.jpg";
import "../mystyles/ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="errorpage">
      <Container fluid className="error-container">
        <Row>
          <h2
            style={{
              color: "red",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            <b>ERROR 404 ! UNAUTHORISED</b>
          </h2>
        </Row>
        <Card className="error-card">
          <Row className="m-3">
            <Col md={6} className="errorcard-image">
              <img src={errorimg} style={{ width: "70%", height: "90%" }} />
            </Col>
            <Col md={6}>
              <Card.Body>
                <h2
                  style={{
                    color: "darkcyan",
                    textAlign: "center",
                    paddingTop: "40px",
                  }}
                >
                  <b>Please Login for Authorised Operations</b>
                </h2>
                <h3
                  style={{
                    color: "crimson",
                    textAlign: "center",
                    paddingTop: "40px",
                  }}
                >
                  <i>
                    You Can't Add, Update and Delete Songs,if you aren't logged
                    in !
                  </i>
                </h3>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default ErrorPage;
