import React, { Component } from "react";
import {
  Container,
  Card,
  Button,
  Row,
  ListGroup,
  Col,
  Table,
} from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../mystyles/AddSongToPlay.css";
import { getSongs, updatePlaylist } from "../redux";
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

const AnimateAddToPlay = styled.div`
  animation: 1.5s ${keyframes`${zoomInUp}`};
`;

class AddSongToPlaylist extends Component {
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
      pathname: `/playlists/${this.props.match.params.id}`,
      state: this.props.songsData,
    });
  }

  onChange = (event) => {
    event.preventDefault();
    const isChecked = event.target.checked;
    if (isChecked) {
      this.setState({
        songs: [...this.state.songs, event.target.value],
      });
    } else {
      const index = this.state.songs.indexOf(event.target.value);
      this.state.songs.splice(index, 1);
      this.setState({ songs: this.state.songs });
    }
  };

  handleAdd = () => {
    if (this.state.songs.length === 0) {
      alert("No Songs Selected !");
    } else {
      const songNames = this.props.songsData.songs.map((song) => song.title);

      let tempIndexes = [];
      const songsToBeAdded = [
        ...this.state.songsInPlaylist.map((song) => song.title),
        ...this.state.songs,
      ];

      for (let i = 0; i < songsToBeAdded.length; i++) {
        tempIndexes.push(songNames.indexOf(songsToBeAdded[i]));
      }

      let songIDs = [];

      for (let i = 0; i < tempIndexes.length; i++) {
        songIDs.push(this.props.songsData.songs[tempIndexes[i]].id);
      }

      const playlist = {
        title: this.state.playlist.title,
        songIDs: songIDs,
        accessCount: this.state.playlist.accessCount,
      };

      if (songIDs === this.state.playlist.songIDs) {
        alert("NO NEW SONGS ADDED");
      } else {
        this.props.updatePlaylist(this.props.match.params.id, playlist);
      }

      this.backtoPlaylist();
    }
  };
  render() {
    return (
      <div className="addsongplay">
        <Container className="addsongplaycontainer">
          <h2
            style={{
              color: "white",
              textAlign: "center",
              paddingBottom: "20px",
            }}
          >
            <b>Hey There ! Add Songs To Playlist</b>
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
          <AnimateAddToPlay>
            <Row>
              <div className="addsongslist scrollbar scrollbar-deep-blue">
                <ul className="myaddsongs">
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
                              <label className="addlabel" htmlFor={`custom-checkbox-${song.id}`}>
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
          </AnimateAddToPlay>
          <Row className="m-2">
            <Col></Col>
            <Col md={6} style={{ textAlign: "center" }}>
              <Button variant="danger" onClick={this.handleAdd}>
                Add Songs
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
  withRouter(AddSongToPlaylist)
);
