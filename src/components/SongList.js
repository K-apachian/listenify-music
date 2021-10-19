import React, { useEffect, useState, Suspense } from "react";
import { withRouter, Link } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Accordion,
  Form,
  FloatingLabel,
  Spinner,
  Dropdown,
  Toast,
} from "react-bootstrap";
import "../mystyles/SongList.css";
import { connect } from "react-redux";
import { getSongs } from "../redux";
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
import { PropagateLoader, ScaleLoader } from "react-spinners";

const AnimateSongList = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
`;

const LoaderAnim = styled.div`
  animation: 6.5s ${keyframes` ${bounce}`};
`;
const SongList = withRouter(({ songsData, userData, getSongs, ...props }) => {
  useEffect(() => {
    getSongs();
    console.log("SONG LIST COMP", songsData);
    // const ids = songsData.songs.map((song) => song.id);
    // console.log("All the song ids", ids);
    // console.log("Index of", ids.indexOf(2));
    // let songs = songsData.songs.slice(0, ids.indexOf(2));
    // songs = songs.concat([...songsData.songs.slice(ids.indexOf(2) + 1)]);
    // console.log("Songs after deleting", songs);
  }, []);

  const [user, setUser] = useState(userData.user);

  const updateSongData = (songName) => {
    alert(`${songName} updated successfully`);
    getSongs();
  };

  const [state, setState] = useState({
    albumchecked: "",
    singerchecked: "",
    songlengthchecked: "",
    titlechecked: "",
    genrechecked: "",
  });

  const [searchSong, setSearchSong] = useState("");

  const filterSongs = (song, query) => {
    return song.title.includes(query);
  };

  let filteredSongs = songsData;
  const handleSearchChange = (data) => {
    setSearchSong(data);
  };

  filteredSongs =
    searchSong === ""
      ? songsData.songs
      : songsData.songs.filter((song) => filterSongs(song, searchSong));

  const handleChange = (event) => {
    setState({
      albumchecked: event.target.checked,
      singerchecked: event.target.checked,
      songlengthchecked: event.target.checked,
      titlechecked: event.target.checked,
      genrechecked: event.target.checked,
    });
  };

  return songsData.loading ? (
    <div className="songlist">
      <Container fluid>
        <Row>
          <Col></Col>
          <Col>
            <h2
              style={{
                color: "white",
                textAlign: "center",
                margin: "160px auto",
              }}
            >
              Loading Songs!...
              <ScaleLoader color={"white"} />
              {/* <Spinner
                animation="border"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>{" "}
              Loading Songs!... */}
            </h2>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  ) : songsData.error ? (
    <h2
      style={{
        color: "black",
        textAlign: "center",
        paddingBottom: "20px",
      }}
    >
      Sorry Buddy! We couldn't find your songs
    </h2>
  ) : (
    <Suspense
      fallback={
        <div>
          <PropagateLoader />
        </div>
      }
    >
      <div className="songlist">
        <AnimateSongList>
          <Container fluid className="songcontainer">
            <h2
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              <b>Welcome to Songs Library</b>
            </h2>
            <Row>
              <Col></Col>
              <Col md={6}>
                <Form>
                  <Form.Group className="mb-1" controlId="search-bar">
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Search Your Song"
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "15px",
                      }}
                      className="mb-2"
                    >
                      <Form.Control
                        id="searchSong"
                        type="text"
                        style={{ color: "black" }}
                        placeholder="Please Search Your Song"
                        value={searchSong}
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
            <Row>
              <ul className="editbuttons">
                {userData.isLoggedIn ? (
                  <>
                    <li>
                      <Link to="/addsong">
                        <Button variant="info">Add New Song</Button>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/error" title="Disabled ! Login To Add">
                        <Button variant="info" disabled>
                          Add New Song
                        </Button>
                      </Link>
                    </li>
                  </>
                )}
                {userData.isLoggedIn ? (
                  <>
                    <li>
                      <Link to="/deletesong">
                        <Button variant="warning">Delete Songs</Button>
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/error" title="Disabled ! Login To Delete">
                        <Button variant="warning" disabled>
                          Delete Songs
                        </Button>
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </Row>
            <div className="songaccordion scrollbar scrollbar-deep-blue">
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
                      {filteredSongs.length === 0 ? (
                        <h2>Sorry, We Can't Find your searched song !!</h2>
                      ) : (
                        filteredSongs.map((song) => (
                          <Accordion.Item eventKey={song.id} key={song.id}>
                            <Accordion.Header>
                              <span className="me-auto">
                                <b>{song.title}</b>
                              </span>
                              {/* <span className="right">
                              <b>{song.songlength}</b>
                            </span> */}
                            </Accordion.Header>
                            <Accordion.Body>
                              <DetailSongs
                                songData={song}
                                onSongUpdate={updateSongData}
                                userLogStatus={userData.isLoggedIn}
                              />
                            </Accordion.Body>
                          </Accordion.Item>
                        ))
                      )}
                    </Accordion>
                  </Col>
                </Row>
              </Container>
            </div>
          </Container>
        </AnimateSongList>
      </div>
    </Suspense>
  );
});

const mapStateToProps = (state) => {
  return {
    songsData: state.song,
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSongs: () => dispatch(getSongs()),
  };
};

export default connect(mapStateToProps, { getSongs })(SongList);
