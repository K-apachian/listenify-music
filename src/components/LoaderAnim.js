import React from "react";
import PropagateLoader, { ScaleLoader } from "react-spinners";
import { Container, Row, Col } from "react-bootstrap";
import "../mystyles/LoaderAnim.css";

const LoaderAnim = () => {
  return (
    <div className="loaderdiv">
      <Container fluid className="loadcontainer">
        <Row className="mt-5" style={{ textAlign: "center" }}>
          <Col md="12">
            <h2
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Getting Things Ready For You!...
            </h2>

            <h2>
              <ScaleLoader height="55" width="8" margin="4" color={"white"} />
            </h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoaderAnim;
