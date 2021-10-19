import React, { useEffect, useState } from "react";
import { withRouter, Prompt } from "react-router-dom";
import {
  Card,
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
  Modal,
  Toast,
} from "react-bootstrap";
import { setIn, useFormik } from "formik";
import * as Yup from "yup";
import "../mystyles/Login.css";
import music3 from "../images/music3.jpg";
import { connect } from "react-redux";
import { getUsers, userLoginSuccess, deleteAllUsers } from "../redux";
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

const AnimateLogin = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
`;

const LoginFormik = withRouter(
  ({ history, userData, getUsers, userLoginSuccess, deleteAllUsers }) => {
    useEffect(() => {
      getUsers();
    }, []);

    const [show, setShow] = useState(false);

    const [invalidPass, setInvalidPass] = useState(false);
    const handleInvalidPass = () => setInvalidPass(true);
    const handleInvalidClose = () => setInvalidPass(false);

    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },

      validationSchema: Yup.object({
        email: Yup.string()
          .min(3, "Minimum 3 characters required")
          .required("How can we identify you!?"),

        password: Yup.string()
          .min(4, "Password should contain minimum 4 characters")
          .required("Password Can't be left empty dear !"),
      }),

      onSubmit: (values) => {
        let emails = userData.users.map((user) => user.email);
        let user = userData.users[emails.indexOf(values.email)];

        if (emails.indexOf(values.email) === -1) {
          alert("User not found! Please sign up");
        } else {
          if (user.password === values.password) {
            userLoginSuccess(user);
            deleteAllUsers();
            history.push("/SongList");
          } else {
            setInvalidPass(true);
          }
        }
      },
    });

    return (
      <div className="login">
        <AnimateLogin>
          <Container fluid className="logincontainer">
            <Card className="login-card">
              <Row>
                <Col>
                  <Card.Header>
                    <h3>Login Here</h3>
                  </Card.Header>
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
                            isValid={
                              formik.touched.email && !formik.errors.email
                            }
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
                      <div className="d-grid gap-2 card-buttons">
                        <Button
                          type="submit"
                          name="submit"
                          size="lg"
                          variant="outline-primary"
                        >
                          Sign In
                        </Button>
                      </div>
                    </Form>
                    <Modal
                      show={invalidPass}
                      onHide={handleInvalidClose}
                      backdrop="static"
                      keyboard={false}
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>INVALID DETAILS</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <h3 style={{ color: "red" }}>
                          Uh Oh ! Invalid Credentials
                        </h3>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="dark"
                          onClick={() => {
                            handleInvalidClose();
                          }}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Container>
        </AnimateLogin>
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
  userLoginSuccess,
  getUsers,
  deleteAllUsers,
})(LoginFormik);
