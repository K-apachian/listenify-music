import React, { Component } from "react";
import girlmusic from "../images/girlmusic.jpg";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { deleteSong } from "../redux";
import { withRouter } from "react-router-dom";
import { PropagateLoader, ScaleLoader } from "react-spinners";
import "../mystyles/DeleteMultipleSongs.css";
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

const AnimateDeleteSongs = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`};
`;

class DeleteMultipleSongs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: [],
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidUpdate() {
    /* console.log("UPDATED -->", this.state.songs); */
  }

  onChange = (event) => {
    event.preventDefault();
    const isChecked = event.target.checked;
    if (isChecked) {
      this.setState({ songs: [...this.state.songs, event.target.value] });
    } else {
      const index = this.state.songs.indexOf(event.target.value);
      this.state.songs.splice(index, 1);
      this.setState({ songs: this.state.songs });
    }
  };

  handleDelete = () => {
    const songNames = this.props.songsData.songs.map((song) => song.title);

    let tempIndexes = [];
    for (let i = 0; i < this.state.songs.length; i++) {
      tempIndexes.push(songNames.indexOf(this.state.songs[i]));
    }

    let songIDs = [];
    for (let i = 0; i < tempIndexes.length; i++) {
      songIDs.push(this.props.songsData.songs[tempIndexes[i]].id);
    }

    for (let i = 0; i < songIDs.length; i++) {
      this.props.deleteSong(songIDs[i]);
    }

    this.props.history.push("/SongList");
  };

  render() {
    return (
      <div className="deletemultiple">
        {this.props.userData.isLoggedIn ? (
          <Container fluid className="deletemultiple-container">
            <Row>
              <Col></Col>
              <Col xs={12} sm={12} lg={4}>
                <h2
                  style={{
                    color: "darkmagenta",
                    textAlign: "center",
                  }}
                >
                  <b>Go With Delete Multiple Songs</b>
                </h2>
              </Col>
              <Col></Col>
            </Row>
            <AnimateDeleteSongs>
              <div className="deleteaccordion scrollbar scrollbar-deep-blue">
                <ul className="mydelete">
                  {this.props.songsData.songs.map((song) => {
                    return (
                      <div>
                        <li key={song.id}>
                          <Card>
                            <Card.Body>
                              <input
                                type="checkbox"
                                name={song.title}
                                value={song.title}
                                onChange={this.onChange}
                              />
                              <label htmlFor={`custom-checkbox-${song.id}`}>
                                <b>{song.title}</b>
                              </label>
                            </Card.Body>
                          </Card>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </AnimateDeleteSongs>
            <Row>
              <Col></Col>
              <Col className="mt-2" md={6} style={{ textAlign: "center" }}>
                <Button variant="danger" onClick={this.handleDelete}>
                  Delete Songs
                </Button>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        ) : (
          <Container fluid className="deletemultiple-container">
            <Row>
              <Col></Col>
              <Col>
                <h2
                  style={{
                    color: "darkmagenta",
                    textAlign: "center",
                    paddingBottom: "20px",
                  }}
                >
                  <b>Please Login and Comeback Here</b>
                </h2>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    songsData: state.song,
    userData: state.user,
  };
};

export default connect(mapStateToProps, { deleteSong })(
  withRouter(DeleteMultipleSongs)
);
