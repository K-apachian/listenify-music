import React, { Component } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { updatePlaylist } from "../redux";
import styled, { keyframes } from "styled-components";
import "../mystyles/DeleteSongFromPlaylist.css";
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

const AnimateDeleteFromPlay = styled.div`
  animation: 1.5s ${keyframes`${zoomInUp}`};
`;

class DeleteSongFromPlaylist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: this.props.location.state[0] || "",
      songsInPlaylist: this.props.location.state[1] || [],
      songs: [],
    };

    this.backtoPlaylist = this.backtoPlaylist.bind(this);
  }

  backtoPlaylist() {
    this.props.history.push({
      pathname: `https://listenify-player.herokuapp.com/playlists/${this.props.match.params.id}`,
      state: this.props.songsData,
    });
  }

  onChange = (event) => {
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
    if (this.state.songs.length === 0) {
      alert("No Songs Selected !");
    } else {
      const songNames = this.props.songsData.songs.map((song) => song.title);
      let tempIndexes = [];

      for (let i = 0; i < this.state.songs.length; i++) {
        tempIndexes.push(songNames.indexOf(this.state.songs[i]));
      }

      let songIDs = [];
      for (let i = 0; i < tempIndexes.length; i++) {
        songIDs.push(this.props.songsData.songs[tempIndexes[i]].id);
      }

      let allsongs = this.state.playlist.songIDs;
      for (let i = 0; i < songIDs.length; i++) {
        allsongs.splice(allsongs.indexOf(songIDs[i]), 1);
      }

      const playlist = {
        title: this.state.playlist.title,
        songIDs: allsongs,
        accessCount: this.state.playlist.accessCount,
      };

      this.props.updatePlaylist(this.props.match.params.id, playlist);

      this.backtoPlaylist();
    }
  };
  render() {
    return (
      <div className="delsongplay">
        <Container className="delsongplaycontainer">
          <h2
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            <b>Hey ! Now You Can Delete Songs From Playlist</b>
          </h2>
          <Row className="m-3">
            <Col></Col>
            <Col md={6} style={{ textAlign: "center" }}>
              <Button variant="info" onClick={this.backtoPlaylist}>
                Back To Playlist
              </Button>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              {this.state.songsInPlaylist.length === 0 ? (
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
                <AnimateDeleteFromPlay>
                  <Row>
                    <div className="delsongslist scrollbar scrollbar-deep-blue">
                      <ul className="mydelsongs">
                        {this.state.songsInPlaylist.map((song) => {
                          return (
                            <div>
                              <li key={song.id}>
                                <Card className="delsongscard">
                                  <Card.Body>
                                    <input
                                      type="checkbox"
                                      name={song.title}
                                      value={song.title}
                                      onChange={this.onChange}
                                    />
                                    <label
                                      className="dellabel"
                                      htmlFor={`custom-checkbox-${song.id}`}
                                    >
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
                  </Row>
                </AnimateDeleteFromPlay>
              )}
            </Col>
          </Row>
          <Row className="m-3">
            <Col></Col>
            <Col md={6} style={{ textAlign: "center" }}>
              <Button variant="danger" onClick={this.handleDelete}>
                Delete Songs
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    songsData: state.song,
  };
};

export default connect(mapStateToProps, { updatePlaylist })(
  withRouter(DeleteSongFromPlaylist)
);
