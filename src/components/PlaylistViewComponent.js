import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import { Link, useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "../mystyles/PlaylistViewComponent.css";
import { getAllPlaylists, getSongs } from "../redux";
import usePlaylistData from "../custominfo/usePlaylistData";
import DetailSongs from "./DetailSongs";
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

const AnimatePlaylistView = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
`;

const PlaylistViewComponent = withRouter(
  ({
    history,
    match,
    songsData,
    userData,
    playlistData,
    getAllPlaylists,
    ...props
  }) => {
    const songsObj = props.location.state || {};
    console.log("PLAYLIST VIEW", songsObj);

    const [playlist, songsInPlaylist] = usePlaylistData(
      match.params.id,
      songsObj
    );

    const playlistSongs = useHistory();
    const handlePlaylistData = (gotopath) => {
      playlistSongs.push({
        pathname: `/playlists/${match.params.id}/${gotopath}`,
        state: [playlist, songsInPlaylist],
      });
    };

    return (
      <div className="playlistview">
        <AnimatePlaylistView>
          <Container fluid className="playlistviewcontainer">
            <h2
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              <b>Welcome to {playlist.title} Playlist</b>
            </h2>
            <Row>
              <ul className="editbuttonss">
                <li>
                  <Link to="/dashboard">
                    <Button variant="info">Back to Playlist</Button>
                  </Link>
                </li>
                <li>
                  <Button
                    variant="success"
                    onClick={() => {
                      handlePlaylistData("addsongtoplay");
                    }}
                  >
                    Add Songs
                  </Button>
                </li>
                <li>
                  <Button
                    variant="danger"
                    onClick={() => {
                      handlePlaylistData("deletesongplaylist");
                    }}
                  >
                    Delete Songs
                  </Button>
                </li>
              </ul>
            </Row>
            <div className="viewaccordion scrollbar scrollbar-deep-blue">
              <Container>
                <Row>
                  <Col>
                    {songsInPlaylist.length === 0 ? (
                      <h2
                        style={{
                          color: "white",
                          textAlign: "center",
                          paddingBottom: "20px",
                        }}
                      >
                        Sorry, No Songs Found In Your Playlist !!
                      </h2>
                    ) : (
                      <Accordion
                        style={{
                          margin: "auto",
                          width: "auto",
                          alignContent: "center",
                        }}
                        defaultActiveKey=""
                      >
                        {songsInPlaylist.map((song) => (
                          <Accordion.Item eventKey={song.id} key={song.id}>
                            <Accordion.Header>
                              <span className="me-auto">
                                <b>{song.title}</b>
                              </span>
                              {/* <span className="right">
                                <b>{song.songlength}</b>
                              </span> */}
                            </Accordion.Header>
                            <Accordion.Body style={{textAlign:"center"}}>
                              <DetailSongs
                                songData={song}
                                userLogStatus={userData.isLoggedIn}
                              />
                            </Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    )}
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>
        </AnimatePlaylistView>
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
export default connect(mapStateToProps, { getAllPlaylists })(
  PlaylistViewComponent
);
