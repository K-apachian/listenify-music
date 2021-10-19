import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col,
  FloatingLabel,
  Modal,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Link,
  Prompt,
  withRouter,
  Redirect,
} from "react-router-dom";
import girlmusic from "../images/girlmusic.jpg";
import { addSong } from "../redux";
import { connect } from "react-redux";
import music3 from "../images/music3.jpg";
import "../mystyles/AddSongFormik.css";
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

const AnimateAddSong = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
`;

const AddSongFormik = withRouter(({ history, addSong }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [songObj, setSongObj] = useState({});
  const [songSubmitted, setSongSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: "",
      album: "",
      singer: "",
      songlength: "",
      genre: "",
      songurl: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Song title is required"),
      album: Yup.string().required("Album/Movie is required"),
      singer: Yup.string().required("Singer/Band name is required"),
      songlength: Yup.string().required("Song length is required"),
      genre: Yup.string().required("Genre is required"),
      songurl: Yup.string().required("Where will you listen the song?"),
    }),
    onSubmit: (values) => {
      setSongObj(values);
      setSongSubmitted(true);
      handleShow();
    },
  });

  const handleAddSong = () => {
    addSong(songObj);
    history.push("/SongList");
  };

  return (
    <div className="addsongform">
      <AnimateAddSong>
        <Container fluid className="addcontainer">
          <h2 style={{ color: "white", textAlign: "center" }} className="p-1">
            <b>Welcome, Please Add New Song</b>
          </h2>
          <Card className="add-card">
            <Row>
              <Col className="card-image">
                <img
                  src={music3}
                  style={{ width: "90%", height: "100%", borderRadius: "15px" }}
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
                        label="Song Title"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Song Title"
                          name="title"
                          value={formik.values.title}
                          onChange={formik.handleChange}
                          isInvalid={formik.errors.title}
                          isValid={formik.touched.title && !formik.errors.title}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {formik.errors.title}
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
                        label="Album/Movie"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Album/Movie"
                          name="album"
                          value={formik.values.album}
                          onChange={formik.handleChange}
                          isInvalid={formik.errors.album}
                          isValid={formik.touched.album && !formik.errors.album}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {formik.errors.album}
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
                        label="Singer"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Singer"
                          name="singer"
                          value={formik.values.singer}
                          onChange={formik.handleChange}
                          isInvalid={formik.errors.singer}
                          isValid={
                            formik.touched.singer && !formik.errors.singer
                          }
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {formik.errors.singer}
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
                        label="Song Length"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Song Length"
                          name="songlength"
                          value={formik.values.songlength}
                          onChange={formik.handleChange}
                          isInvalid={formik.errors.songlength}
                          isValid={
                            formik.touched.songlength &&
                            !formik.errors.songlength
                          }
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {formik.errors.songlength}
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
                        label="Genre"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Genre"
                          name="genre"
                          value={formik.values.genre}
                          onChange={formik.handleChange}
                          isInvalid={formik.errors.genre}
                          isValid={formik.touched.genre && !formik.errors.genre}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {formik.errors.genre}
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
                        label="Song URL"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Song URL"
                          name="songurl"
                          value={formik.values.songurl}
                          onChange={formik.handleChange}
                          isInvalid={formik.errors.songurl}
                          isValid={
                            formik.touched.songurl && !formik.errors.songurl
                          }
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {formik.errors.songurl}
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
                        Add Song
                      </Button>
                    </div>
                    <Prompt
                      when={
                        (formik.values.title.length > 0 ||
                          formik.values.album.length > 0 ||
                          formik.values.singer.length > 0 ||
                          formik.values.songlength.length > 0 ||
                          formik.values.genre.length > 0 ||
                          formik.values.songurl.length > 0) &&
                        songSubmitted === false
                      }
                      message="Do You Want To Leave In the Middle. Are you sure?"
                    />
                  </Form>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Confirm Song</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Adding A New Song. Are you all set?</Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        onClick={() => {
                          handleClose();
                          setSongSubmitted(false);
                        }}
                      >
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleAddSong}>
                        Add
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Container>
      </AnimateAddSong>
    </div>
  );
});

export default connect(null, { addSong })(AddSongFormik);
