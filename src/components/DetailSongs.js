import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Dropdown } from "react-bootstrap";
import { useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteSong, getSongs } from "../redux";
import "../mystyles/DetailSong.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as TiIcons from "react-icons/ti";
import { Link } from "react-router-dom";
import UpdateSong from "./UpdateSong";

const DetailSongs = withRouter(
  ({ history, songData, userLogStatus, deleteSong, data, ...props }) => {
    const [albumShow, setAlbumShow] = useState(false);
    const [singerShow, setSingerShow] = useState(false);
    const [songlengthShow, setSongLengthShow] = useState(false);
    const [titleShow, setTitleShow] = useState(false);
    const [genreShow, setGenreShow] = useState(false);

    const sendUpdate = useHistory();
    const handleUpdate = (data) => {
      sendUpdate.push({
        pathname: "/updatesong",
        state: data,
      });
    };

    const deleteSongData = () => {
      alert(`${songData.title} has been deleted successfully`);
      deleteSong(songData.id);
      history.push("/SongList");
    };
    return (
      <div className="detailsongs">
        <Row className="mb-3">
          <Col></Col>
          <Col lg={6}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Show Custom Details
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  {albumShow ? (
                    <>
                      <label onClick={() => setAlbumShow(!albumShow)}>
                        Album/Movie <TiIcons.TiTick />
                      </label>
                    </>
                  ) : (
                    <>
                      <label onClick={() => setAlbumShow(!albumShow)}>
                        Album/Movie
                      </label>
                    </>
                  )}
                </Dropdown.Item>
                <Dropdown.Item>
                  {singerShow ? (
                    <>
                      <label onClick={() => setSingerShow(!singerShow)}>
                        Singers <TiIcons.TiTick />
                      </label>
                    </>
                  ) : (
                    <>
                      <label onClick={() => setSingerShow(!singerShow)}>
                        Singers
                      </label>
                    </>
                  )}
                </Dropdown.Item>
                <Dropdown.Item>
                  {songlengthShow ? (
                    <>
                      <label onClick={() => setSongLengthShow(!songlengthShow)}>
                        Song Length <TiIcons.TiTick />
                      </label>
                    </>
                  ) : (
                    <>
                      <label onClick={() => setSongLengthShow(!songlengthShow)}>
                        Song Length
                      </label>
                    </>
                  )}
                </Dropdown.Item>
                <Dropdown.Item disabled>
                  <label onClick={() => setTitleShow(true)}>
                    Title <TiIcons.TiTick />
                  </label>
                </Dropdown.Item>
                <Dropdown.Item>
                  {genreShow ? (
                    <>
                      <label onClick={() => setGenreShow(!genreShow)}>
                        Genre <TiIcons.TiTick />
                      </label>
                    </>
                  ) : (
                    <>
                      <label onClick={() => setGenreShow(!genreShow)}>
                        Genre
                      </label>
                    </>
                  )}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col></Col>
        </Row>
        <Container fluid className="detailcontainer">
          <Card className="detailcard">
            <Card.Body>
              <Card.Text>
                <Row style={{ justifyContent: "center" }}>
                  <Col lg={6}>
                    <div className="detaildata">
                      <ul className="detaillist">
                        {albumShow && (
                          <li>
                            <h4>
                              <b> Album </b>
                            </h4>
                            <p style={{ fontFamily: "cursive" }}>
                              {songData.album}
                            </p>
                          </li>
                        )}
                        {singerShow && (
                          <li>
                            <h4>
                              <b> Singers </b>
                            </h4>
                            <p style={{ fontFamily: "cursive" }}>
                              {" "}
                              {songData.singer}{" "}
                            </p>
                          </li>
                        )}
                        {genreShow && (
                          <li>
                            <h4>
                              <b> Genre </b>
                            </h4>
                            <p style={{ fontFamily: "cursive" }}>
                              {" "}
                              {songData.genre}{" "}
                            </p>
                          </li>
                        )}
                        {songlengthShow && (
                          <li>
                            <h4>
                              <b> Song Length </b>
                            </h4>
                            <p style={{ fontFamily: "cursive" }}>
                              {" "}
                              {songData.songlength}{" "}
                            </p>
                          </li>
                        )}
                        {!titleShow && (
                          <li>
                            <h4>
                              <b> Title </b>
                            </h4>
                            <p style={{ fontFamily: "cursive" }}>
                              {" "}
                              {songData.title}{" "}
                            </p>
                          </li>
                        )}
                      </ul>
                    </div>
                    {/* </Col>
                  <Col lg={6}> */}
                    <div className="detaildata">
                      <ul className="detailbuttons">
                        <li>
                          {userLogStatus && (
                            <div>
                              <Button
                                id="buttonShow"
                                title="Update Song"
                                variant="outline-primary"
                                onClick={() => {
                                  handleUpdate(songData);
                                }}
                              >
                                Update <FaIcons.FaPencilAlt />
                              </Button>
                            </div>
                          )}
                        </li>
                        <li>
                          <a
                            href={songData.songurl}
                            target="_blank"
                            to={songData.songurl}
                            title="Listen On Youtube !"
                          >
                            <Button variant="outline-dark">
                              Listen <FaIcons.FaHeadphones />
                            </Button>
                          </a>
                        </li>
                        <li>
                          {userLogStatus && (
                            <div>
                              <Button
                                title="Delete Song"
                                variant="outline-danger"
                                onClick={deleteSongData}
                              >
                                Delete <AiIcons.AiFillDelete />
                              </Button>
                            </div>
                          )}
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
);

export default connect(null, { deleteSong })(DetailSongs);
