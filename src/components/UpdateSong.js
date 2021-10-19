import React, { useState } from "react";
import { useFormik } from "formik";
import { withRouter, Prompt, Link } from "react-router-dom";
import {
  Container,
  Card,
  Button,
  Form,
  FloatingLabel,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import { connect } from "react-redux";
import { updateSong } from "../redux";
import music3 from "../images/music3.jpg";
import "../mystyles/UpdateSong.css";
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

const AnimateUpdateSong = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
`;

const UpdateSong = withRouter(
  ({ history, updateSong, songsData, ...props }) => {
    const song = props.location.state || {};
    console.log("SONG DATA IN UPDATE SONG", song);

    const [updateSongObj, setUpdateSongObj] = useState({});

    const [updateSubmitted, setUpdateSubmitted] = useState(false);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const formik = useFormik({
      initialValues: {
        title: song.title,
        album: song.album,
        singer: song.singer,
        songlength: song.songlength,
        genre: song.genre,
        songurl: song.songurl,
      },

      onSubmit: (values) => {
        if (
          values.title === song.title &&
          values.album === song.album &&
          values.singer === song.singer &&
          values.genre === song.songlength &&
          values.songlength === song.songlength &&
          values.songurl === song.songurl
        ) {
          alert(`Everything seems same, No changes found !!`);
        } else {
          /* updateSong(song.id, values);
            alert(`${song.title} has been updated successfully!`);
            history.push("/SongList");
            //props.onSongUpdate(values.title); */
          setUpdateSongObj(values);
          setUpdateSubmitted(true);
          handleShow();
        }
      },
    });

    const handleUpdateSong = () => {
      updateSong(song.id, updateSongObj);
      history.push("/SongList");
    };

    return (
      <div className="editdashboard">
        <AnimateUpdateSong>
          <Container fluid className="edit-container">
            <Row>
              <ul className="editbuttons">
                <li>
                  <Link to="/SongList">
                    <Button variant="info">Back to Songs</Button>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard">
                    <Button variant="danger">Go To Playlist</Button>
                  </Link>
                </li>
              </ul>
            </Row>
            <Card className="update-card">
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
                            isValid={
                              formik.touched.title && !formik.errors.title
                            }
                          />
                          <Form.Control.Feedback type="invalid" tooltip>
                            {formik.errors.title}
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
                            isValid={
                              formik.touched.album && !formik.errors.album
                            }
                          />
                          <Form.Control.Feedback type="invalid" tooltip>
                            {formik.errors.album}
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
                        controlId="validationFormik105"
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
                        controlId="validationFormik106"
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
                            isValid={
                              formik.touched.genre && !formik.errors.genre
                            }
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
                          Update
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
                          updateSubmitted === false
                        }
                        message="Seems Like You were updating Song. Do You wanna leave it?"
                      />
                    </Form>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Confirm Update</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {updateSongObj.title} will be updated. All set ?
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="info"
                          onClick={() => {
                            handleClose();
                            setUpdateSubmitted(false);
                          }}
                        >
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdateSong}>
                          Update
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Container>
        </AnimateUpdateSong>
      </div>
    );
  }
);
const mapStateToProps = (state) => {
  return {
    songsData: state.song,
    userData: state.user,
  };
};

export default connect(mapStateToProps, { updateSong })(UpdateSong);
