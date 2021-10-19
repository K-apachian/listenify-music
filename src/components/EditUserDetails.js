import React, { useState } from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import {
  Form,
  Col,
  FloatingLabel,
  Button,
  Container,
  Card,
  Row,
  Modal,
} from "react-bootstrap";
import "../mystyles/Dashboard.css";
import { withRouter, Link, Prompt } from "react-router-dom";
import * as Yup from "yup";
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
} from "react-animations";

const AnimateEditUser = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
`;

const EditUserDetails = withRouter(
  ({ history, userData, updateUser, ...props }) => {
    const [user, setUser] = useState(userData.user);

    const [submitted, setSubmitted] = useState(false);
    const formik = useFormik({
      initialValues: {
        email: userData.user.email,
        password: userData.user.password,
        firstName: userData.user.firstName,
        lastName: userData.user.lastName,
        locationn: userData.user.locationn,
        phone: userData.user.phone,
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
        alert(`Hi ${values.firstName} , Your details have been updated`);

        updateUser(userData.user.id, values);
        history.push("/userconfirm");
      },
    });
    return (
      <div className="editdashboard">
        <AnimateEditUser>
          <Container fluid className="edit-container">
            <Row>
              <ul className="editbuttons">
                <li>
                  <Link to="/userconfirm">
                    <Button variant="info">Back to dashboard</Button>
                  </Link>
                </li>
                <li>
                  <Link to="/changepassword">
                    <Button variant="danger">Change Password</Button>
                  </Link>
                </li>
              </ul>
            </Row>
            <Card className="edit-card">
              <Row>
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
                            disabled
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
                              formik.touched.firstName &&
                              !formik.errors.firstName
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
                              formik.touched.locationn &&
                              !formik.errors.locationn
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
                            isValid={
                              formik.touched.phone && !formik.errors.phone
                            }
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
                          Update
                        </Button>
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
                        message="You Haven't saved data yet. Are you sure?"
                      />
                    </Form>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Container>
        </AnimateEditUser>
      </div>
    );
  }
);

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

export default connect(mapStateToProps, { updateUser })(EditUserDetails);
