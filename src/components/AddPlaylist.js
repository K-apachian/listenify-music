import React, { Component } from "react";
import { Form, Button, FloatingLabel, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { addPlaylist } from "../redux";

class AddPlaylist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playlist: "",
    };
  }

  handlePlaylistChange = (event) => {
    this.setState({
      playlist: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const playlistData = {
      title: this.state.playlist,
      songIDs: [],
      accessCount: 0,
    };

    if (this.state.playlist === "") {
      alert(" You Forgot to Add Playlist Name");
    } else {
      alert(this.state.playlist);
      this.props.addPlaylist(playlistData);
      this.props.onHide();
    }
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Form onSubmit={this.handleSubmit}>
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
                  value={this.state.playlist}
                  onChange={this.handlePlaylistChange}
                />
              </FloatingLabel>

              <Button variant="outline-dark" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Row>
        </Form>
      </div>
    );
  }
}

export default connect(null, { addPlaylist })(AddPlaylist);
