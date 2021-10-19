import React, { useState } from "react";
import "../mystyles/ChangePassword.css";
import * as Yup from "yup";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
  Modal,
} from "react-bootstrap";
import { withRouter, Link, history } from "react-router-dom";
import { connect } from "react-redux";
import { useFormik } from "formik";
import { updateUser } from "../redux";
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
  fadeInDown,
} from "react-animations";

const AnimateChangePass = styled.div`
  animation: 1.5s ${keyframes`${fadeInDown}`};
`;

const ChangePassword = withRouter(
  ({ history, userData, updateUser, ...props }) => {
    const [user, setUser] = useState(userData.user);
    const [match, setMatch] = useState(false);

    const [changeSubmitted, setChangeSubmitted] = useState(false);
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const formik1 = useFormik({
      initialValues: {
        password: userData.user.password,
        checkPassword: "",
      },

      validationSchema: Yup.object({
        password: Yup.string()
          .min(4, "Password should contain minimum 4 characters")
          .required("Password Can't be left empty dear !"),
      }),

      onSubmit: (values) => {
        if (values.checkPassword === values.password) {
          alert("PASSWORDS MATCH");
          setMatch(true);
        } else {
          alert("PASSWORDS DONT MATCH");
          setMatch(false);
        }
      },
    });

    const formik2 = useFormik({
      initialValues: {
        newPassword: "",
        confirmPassword: "",
      },

      validationSchema: Yup.object({
        newPassword: Yup.string()
          .min(4, "New Password should contain minimum 4 characters")
          .required("Password Can't be left empty dear !"),
      }),

      onSubmit: (values) => {
        if (values.newPassword === userData.user.password) {
          alert("PASSWORDS CAN'T BE SAME AS CURRENT ONE");
        } else if (values.newPassword === values.confirmPassword) {
          userData.user = {
            ...userData.user,
            password: values.newPassword,
          };
          updateUser(userData.user.id, userData.user);
          handleShow();
        } else {
          alert("PASSWORDS AREN'T MATCHING");
        }
      },
    });

    return (
      <div className="changepass">
        <AnimateChangePass>
          <Container fluid className="passcontainer">
            <h1>WANT TO CHANGE YOUR PASSWORD ?</h1>

            <Row className="m-5">
              <Col></Col>
              {!match ? (
                <>
                  <Col md={4}>
                    <h4>Enter Your Current Password :</h4>
                    <Form onSubmit={formik1.handleSubmit}>
                      <Form.Group
                        as={Col}
                        controlId="validationFormik102"
                        className="position-relative mb-3"
                      >
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Current Password"
                          style={{ color: "crimson", fontWeight: "bold" }}
                          className="mb-3"
                        >
                          <Form.Control
                            type="password"
                            placeholder="Password"
                            name="checkPassword"
                            value={formik1.values.checkPassword}
                            onChange={formik1.handleChange}
                            isInvalid={formik1.errors.checkPassword}
                            isValid={
                              formik1.touched.checkPassword &&
                              !formik1.errors.checkPassword
                            }
                          />
                          <Form.Control.Feedback type="invalid" tooltip>
                            {formik1.errors.checkPassword}
                          </Form.Control.Feedback>
                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group>
                        <Button type="submit" name="submit" variant="danger">
                          Verify
                        </Button>
                      </Form.Group>
                    </Form>
                  </Col>
                </>
              ) : (
                <>
                  <Col md={4}>
                    <h4>Enter New Password : </h4>
                    <Form onSubmit={formik2.handleSubmit}>
                      <Form.Group
                        as={Col}
                        controlId="validationFormik102"
                        className="position-relative mb-3"
                      >
                        <FloatingLabel
                          controlId="floatingInput"
                          label="New Password"
                          style={{ color: "crimson", fontWeight: "bold" }}
                          className="mb-3"
                        >
                          <Form.Control
                            type="password"
                            placeholder="New Password"
                            name="newPassword"
                            value={formik2.values.newPassword}
                            onChange={formik2.handleChange}
                            isInvalid={formik2.errors.newPassword}
                            isValid={
                              formik2.touched.newPassword &&
                              !formik2.errors.newPassword
                            }
                          />
                          <Form.Control.Feedback type="invalid" tooltip>
                            {formik2.errors.newPassword}
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
                          label="Confirm Password"
                          style={{ color: "crimson", fontWeight: "bold" }}
                          className="mb-3"
                        >
                          <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={formik2.values.confirmPassword}
                            onChange={formik2.handleChange}
                            isInvalid={formik2.errors.confirmPassword}
                            isValid={
                              formik2.touched.confirmPassword &&
                              !formik2.errors.confirmPassword
                            }
                          />
                          <Form.Control.Feedback type="invalid" tooltip>
                            {formik2.errors.confirmPassword}
                          </Form.Control.Feedback>
                        </FloatingLabel>
                      </Form.Group>
                      <Form.Group>
                        <Button type="submit" name="submit" variant="info">
                          Update Password
                        </Button>
                      </Form.Group>
                    </Form>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Go Ahead</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>All Set. Password is Updated</Modal.Body>
                      <Modal.Footer>
                        <Link to="/userconfirm">
                          <Button variant="primary">Go</Button>
                        </Link>
                      </Modal.Footer>
                    </Modal>
                  </Col>
                </>
              )}
              <Col></Col>
            </Row>
          </Container>
        </AnimateChangePass>
      </div>
    );
  }
);

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
export default connect(mapStateToProps, { updateUser })(ChangePassword);
