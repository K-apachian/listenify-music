import React, { useState, useEffect } from "react";
import {
  Container,
  Spinner,
  Accordion,
  Row,
  Col,
  Form,
  Button,
  Modal,
} from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import "../mystyles/PlaylistDashboard.css";
import { withRouter, Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  addPlaylist,
  deletePlaylist,
  getAllPlaylists,
  getSongs,
} from "../redux";
import * as AiIcons from "react-icons/ai";
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

const AnimatePlaylist = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
`;

const PlaylistDashboard = withRouter(
  ({
    history,
    playlistData,
    userData,
    songsData,
    getAllPlaylists,
    getSongs,
    deletePlaylist,
    addPlaylist,
    ...props
  }) => {
    useEffect(() => {
      getAllPlaylists();
      getSongs();
    }, []);

    console.log("PLAYLIST DASHBOARD", songsData);
    const playlistSongs = useHistory();
    const handlePlaylistData = (id) => {
      playlistSongs.push({
        pathname: `/playlists/${id}`,
        state: songsData,
      });
      console.log("SONGS DATA", songsData);
    };

    const [myPlaylist, setMyPlaylist] = useState("");
    const [searchPlaylist, setSearchPlaylist] = useState("");

    const filterPlaylists = (playlist, query) => {
      return playlist.title.includes(query);
    };

    let filteredPlaylists = playlistData;
    const handleSearchChange = (data) => {
      setSearchPlaylist(data);
    };

    filteredPlaylists =
      searchPlaylist === ""
        ? playlistData.playlists
        : playlistData.playlists.filter((playlist) =>
            filterPlaylists(playlist, searchPlaylist)
          );

    /* MODAL SHOW FOR ADDING PLAYLIST */
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /*MODAL SHOW FOR DELETING */

    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteShow = () => setDeleteShow(true);
    const handleDeleteClose = () => setDeleteShow(false);

    const handlePlaylistChange = (event) => {
      setMyPlaylist(event.target.value);
    };

    const handleAddPlaylist = (event) => {
      event.preventDefault();
      const playlistInfo = {
        title: myPlaylist,
        songIDs: [],
        accessCount: 0,
      };

      if (myPlaylist === "") {
        alert("PLEASE ENTER PLAYLIST NAME");
      } else {
        alert(`${myPlaylist} playlist has been added`);
        addPlaylist(playlistInfo);
        setShow(false);
        setMyPlaylist("");
      }
    };

    const deletePlaylistData = (id, title, event) => {
      alert(`${title} playlist has been deleted successfully`);
      deletePlaylist(id);
      getAllPlaylists();
      history.push({
        pathname: "/dashboard",
        state: playlistData.playlists,
      });
    };

    return playlistData.loading ? (
      <h2
        style={{
          color: "black",
          textAlign: "center",
          paddingBottom: "20px",
        }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>{" "}
        Loading Playlists!...
      </h2>
    ) : playlistData.error ? (
      <h2
        style={{
          color: "black",
          textAlign: "center",
        }}
      >
        Uh Oh ! No Playlists created
      </h2>
    ) : (
      <div className="playlistdashboard">
        <Container fluid className="playlistcontainer">
          <h2
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            <b>Welcome to Playlist Dashboard</b>
          </h2>
          <Row>
            <Col></Col>
            <Col md={6}>
              <Form>
                <Form.Group className="mb-1" controlId="search-bar">
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Search Your Playlist"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                    className="mb-1"
                  >
                    <Form.Control
                      id="searchPlaylist"
                      type="text"
                      style={{ color: "black" }}
                      placeholder="Please Search Your Playlist"
                      value={searchPlaylist}
                      onChange={(event) =>
                        handleSearchChange(event.target.value)
                      }
                    />
                  </FloatingLabel>
                </Form.Group>
              </Form>
            </Col>
            <Col></Col>
          </Row>
          <Row className="m-1">
            <Col></Col>
            <Col md={6} style={{ textAlign: "center" }}>
              <Button variant="dark" onClick={handleShow}>
                Add Playlist
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>Add Your New Playlist</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleAddPlaylist}>
                    <Row className="mb-3">
                      <Form.Group as={Col}>
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Playlist"
                          className="mb-3"
                        >
                          <Form.Control
                            type="text"
                            placeholder="Playlist"
                            value={myPlaylist}
                            onChange={handlePlaylistChange}
                          />
                        </FloatingLabel>

                        <Button variant="outline-dark" type="submit">
                          Submit
                        </Button>
                      </Form.Group>
                    </Row>
                  </Form>
                </Modal.Body>
              </Modal>
            </Col>
            <Col></Col>
          </Row>
          <AnimatePlaylist>
            <div className="playlistaccordion scrollbar scrollbar-deep-blue">
              <Container>
                <Row>
                  <Col>
                    <Accordion
                      style={{
                        margin: "auto",
                        width: "auto",
                        alignContent: "center",
                      }}
                      defaultActiveKey=""
                    >
                      {filteredPlaylists.length === 0 ? (
                        <h2
                          style={{
                            color: "white",
                            textAlign: "center",
                            paddingBottom: "20px",
                          }}
                        >
                          Sorry, We Can't Find your playlists!!
                        </h2>
                      ) : (
                        filteredPlaylists.map((playlist) => (
                          <Accordion.Item
                            eventKey={playlist.id}
                            key={playlist.id}
                          >
                            <Accordion.Header>
                              <span className="left">
                                <b>{playlist.title}</b>
                              </span>
                            </Accordion.Header>
                            <Accordion.Body>
                              <Row>
                                <div className="detaildata">
                                  <ul className="detaillists">
                                    <li>
                                      <Button
                                        variant="outline-success"
                                        onClick={() => {
                                          handlePlaylistData(playlist.id);
                                        }}
                                      >
                                        Go To {playlist.title} Songs
                                      </Button>
                                    </li>

                                    <li>
                                      <Button
                                        variant="outline-danger"
                                        onClick={deletePlaylistData.bind(
                                          this,
                                          playlist.id,
                                          playlist.title
                                        )}
                                      >
                                        Delete Playlist <AiIcons.AiFillDelete />
                                      </Button>
                                    </li>

                                    <li>
                                      <h4 className="mt-2 justify-content-center">
                                        Songs : {playlist.songIDs.length}
                                      </h4>
                                    </li>
                                  </ul>
                                </div>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        ))
                      )}
                    </Accordion>
                  </Col>
                </Row>
              </Container>
            </div>
          </AnimatePlaylist>
        </Container>
      </div>
    );
  }
);

const mapStateToProps = (state) => {
  return {
    userData: state.user,
    songsData: state.song,
    playlistData: state.playlist,
  };
};

export default connect(mapStateToProps, {
  deletePlaylist,
  getAllPlaylists,
  getSongs,
  addPlaylist,
})(PlaylistDashboard);
