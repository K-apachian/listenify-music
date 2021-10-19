import React, { useEffect, useState } from "react";
import { withRouter, Prompt } from "react-router-dom";
import { connect } from "react-redux";
import { addUser, getUsers } from "../redux";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Form,
  FloatingLabel,
  Modal,
} from "react-bootstrap";
import "../mystyles/Register.css";
import signup from "../images/signup.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
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

const AnimateRegister = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
`;

const RegiFormik = withRouter(({ history, userData, addUser, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, []);

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const [submitted, setSubmitted] = useState(false);

  const [userDetails, setUserDetails] = useState({});

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      locationn: "",
      phone: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .min(3, "Minimum 3 characters required")
        .required("Please Type Your Email Buddy !"),

      password: Yup.string()
        .min(4, "Password should contain minimum 4 characters")
        .required("Password Can't be left empty dear !"),

      firstName: Yup.string()
        .min(3, "Minimum 3 characters required")
        .required("Why your First Name is empty!?"),

      lastName: Yup.string()
        .min(3, "Minimum 3 characters required")
        .required("Please Fill out your Last Name !"),

      locationn: Yup.string()
        .min(2, "Location can't be this much short")
        .required("Fill out the location where you stay"),

      phone: Yup.string()
        .min(3, "10 Digit Phone Number required")
        .required("Enter your Phone Number to make us reach you! "),
    }),

    onSubmit: (values) => {
      let emails = userData.users.map((user) => user.email);
      // alert(JSON.stringify(values, null, 3));
      if (emails.indexOf(values.email) === -1) {
        /* addUser(values);
        history.push("/Login"); */

        setUserDetails(values);
        setSubmitted(true);
        handleShow();
      } else {
        alert("User already registered , please Login");
      }
    },
  });

  const handleRegister = () => {
    addUser(userDetails);
    history.push("/login");
  };
  return (
    <div className="register">
      <AnimateRegister>
        <Container fluid className="regicontainer">
          <Card className="regi-card">
            <Row>
              <Col className="card-image">
                <img
                  src={signup}
                  style={{ width: "95%", height: "100%", borderRadius: "15px" }}
                />
              </Col>
              <Col>
                <Card.Body>
                  <Form onSubmit={formik.handleSubmit}>
                    <Form.Group
                      as={Col}
                      controlId="validationFormik101"
                      className="position-relative mb-3"
                    >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          isInvalid={formik.errors.email}
                          isValid={formik.touched.email && !formik.errors.email}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {formik.errors.email}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      controlId="validationFormik102"
                      className="position-relative mb-3"
                    >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3"
                      >
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          name="password"
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          isInvalid={formik.errors.password}
                          isValid={
                            formik.touched.password && !formik.errors.password
                          }
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {formik.errors.password}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      controlId="validationFormik103"
                      className="position-relative mb-3"
                    >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="First Name"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                          value={formik.values.firstName}
                          onChange={formik.handleChange}
                          isInvalid={formik.errors.firstName}
                          isValid={
                            formik.touched.firstName && !formik.errors.firstName
                          }
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {formik.errors.firstName}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      controlId="validationFormik104"
                      className="position-relative mb-3"
                    >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Last Name"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          name="lastName"
                          value={formik.values.lastName}
                          onChange={formik.handleChange}
                          isInvalid={formik.errors.lastName}
                          isValid={
                            formik.touched.lastName && !formik.errors.lastName
                          }
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {formik.errors.lastName}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      controlId="validationFormik105"
                      className="position-relative mb-3"
                    >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Location"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Location"
                          name="locationn"
                          value={formik.values.locationn}
                          onChange={formik.handleChange}
                          isInvalid={formik.errors.locationn}
                          isValid={
                            formik.touched.locationn && !formik.errors.locationn
                          }
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {formik.errors.locationn}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      controlId="validationFormik106"
                      className="position-relative mb-3"
                    >
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Phone"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Phone"
                          name="phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          isInvalid={formik.errors.phone}
                          isValid={formik.touched.phone && !formik.errors.phone}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {formik.errors.phone}
                        </Form.Control.Feedback>
                      </FloatingLabel>
                    </Form.Group>
                    <div className="d-grid gap-2 card-buttons">
                      <Button
                        type="submit"
                        name="submit"
                        size="lg"
                        variant="outline-primary"
                      >
                        Sign Up
                      </Button>
                      {/* <Button
                      variant="outline-danger"
                      size="lg"
                      onClick={formik.handleReset}
                    >
                      Reset
                    </Button> */}
                    </div>
                    <Prompt
                      when={
                        (formik.values.email.length > 0 ||
                          formik.values.password.length > 0 ||
                          formik.values.firstName.length > 0 ||
                          formik.values.lastName.length > 0 ||
                          formik.values.locationn.length > 0 ||
                          formik.values.phone !== "") &&
                        submitted === false
                      }
                      message="So You Don't you really wanna join us?. Are you sure?"
                    />
                  </Form>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      One click to Join Us. Are you all set?
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          handleClose();
                          setSubmitted(false);
                        }}
                      >
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleRegister}>
                        Join
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      </AnimateRegister>
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
export default connect(mapStateToProps, { addUser, getUsers })(RegiFormik);
