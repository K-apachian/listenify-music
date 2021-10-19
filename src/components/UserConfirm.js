import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteCurrentUser, userLogoutSuccess } from "../redux";
import * as Yup from "yup";
import {
  Container,
  Button,
  Card,
  Row,
  Col,
  Form,
  FloatingLabel,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import "../mystyles/Dashboard.css";
import * as FaIcons from "react-icons/fa";
import { useFormik } from "formik";
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

const AnimateDashboard = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
`;

const UserConfirm = withRouter(
  ({ history, userData, userLogoutSuccess, deleteCurrentUser, ...props }) => {
    const [user, setUser] = useState(userData.user);

    const d = new Date();
    const [myTime, setMytime] = useState(d.toLocaleTimeString());

    const [show, setShow] = useState(false);
    return (
      <div className="dashboard">
        {userData.isLoggedIn ? (
          <AnimateDashboard>
            <Container fluid className="dashcontainer">
              <h2
                style={{ color: "white", textAlign: "center" }}
              >
                <b>Hi {userData.user.firstName}, Welcome To Your Dashboard</b>
              </h2>
              <Row>
                <Col md={8}>
                  <Card className="dash-card">
                    <Row>
                      <Col md={6}>
                        <Card.Body>
                          <Card.Title>
                            <h2>First Name :</h2>
                          </Card.Title>
                          <Card.Text>
                            <h4>{userData.user.firstName}</h4>
                          </Card.Text>
                        </Card.Body>
                      </Col>
                      <Col md={6}>
                        <Card.Body>
                          <Card.Title>
                            <h2>Last Name :</h2>
                          </Card.Title>
                          <Card.Text>
                            <h4>{userData.user.lastName}</h4>
                          </Card.Text>
                        </Card.Body>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Card.Body>
                          <Card.Title>
                            <h2>Email ID:</h2>
                          </Card.Title>
                          <Card.Text>
                            <h4>{userData.user.email}</h4>
                          </Card.Text>
                        </Card.Body>
                      </Col>
                      <Col md={6}>
                        <Card.Body>
                          <Card.Title>
                            <h2>Location :</h2>
                          </Card.Title>
                          <Card.Text>
                            <h4>{userData.user.locationn}</h4>
                          </Card.Text>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="dash-card">
                    <Row>
                      <Col>
                        <Card.Body>
                          <Card.Title>
                            <h2>Mobile Number :</h2>
                          </Card.Title>
                          <Card.Text>
                            <h4>{userData.user.phone}</h4>
                          </Card.Text>
                        </Card.Body>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Card.Body>
                          <Card.Title>
                            <h2>Current Time :</h2>
                          </Card.Title>
                          {/* <Card.Title>
                          <h2>Password :</h2>
                        </Card.Title>
                        <Card.Text>
                          {show ? (
                            <>
                              <FaIcons.FaRegEye
                                onClick={() => setShow(!show)}
                              />
                              <h4>{userData.user.password}</h4>
                            </>
                          ) : (
                            <>
                              <FaIcons.FaRegEyeSlash
                                onClick={() => setShow(!show)}
                              />
                            </>
                          )}
                        </Card.Text> */}
                          <Card.Text>
                            <h3>{myTime}</h3>
                          </Card.Text>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
              <Row style={{textAlign:"center"}}>
                <ul className="mybuttons">
                  <li>
                    <Link to="/editdetails">
                      <Button variant="outline-info">Edit Details</Button>
                    </Link>
                  </li>
                </ul>
              </Row>
            </Container>
          </AnimateDashboard>
        ) : (
          <h2 style={{ textAlign: "center" }} className="p-5">
            Oops Sorry !! , Please Login to View Your Dashboard
          </h2>
        )}
      </div>
    );
  }
);

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

export default connect(mapStateToProps, {
  deleteCurrentUser,
  userLogoutSuccess,
})(UserConfirm);
