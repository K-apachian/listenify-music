import React from 'react'
import AddSongFormik from './AddSongFormik';
import { withRouter } from 'react-router';
import { addSong } from '../redux/songs/songAction';
import { connect } from 'react-redux'

const AddSong = withRouter(({ history, addSong }) => {
  const saveSong = (song) => {
    addSong(song);
    history.push("/SongList");
  };

  return <AddSongFormik onSave={saveSong}/>;
});

export default connect(null, { addSong })(AddSong)
