import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoaderAnim from "./LoaderAnim";
import PlaylistDashboard from "../components/PlaylistDashboard";
import PlaylistViewComponent from "../components/PlaylistViewComponent";
import AddSongToPlaylist from "../components/AddSongToPlaylist";
import DeleteSongFromPlaylist from "./DeleteSongFromPlaylist";
import ErrorPage from "./ErrorPage";
import PromptModal from "./PromptModal";
import Musicbar from "./Musicbar";

const Home = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
    import("../components/Home")
  );
});

const RegiFormik = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
    import("../components/RegiFormik")
  );
});

const SongList = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
    import("../components/SongList")
  );
});

const LoginFormik = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
    import("../components/LoginFormik")
  );
});

const AddSongFormik = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
    import("../components/AddSongFormik")
  );
});

const UserConfirm = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
    import("../components/UserConfirm")
  );
});

const AboutPlayer = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
    import("../components/AboutPlayer")
  );
});

const EditUserDetails = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
    import("../components/EditUserDetails")
  );
});
const ChangePassword = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
    import("../components/ChangePassword")
  );
});

const UpdateSong = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
    import("../components/UpdateSong")
  );
});

const InfoPage = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
    import("../components/InfoPage")
  );
});

const ReachUs = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
    import("../components/ReachUs")
  );
});

const DeleteMultipleSongs = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 5 * 1000)).then(() =>
    import("../components/DeleteMultipleSongs")
  );
});

function AllRouter() {
  return (
    <div>
      <Suspense fallback={<LoaderAnim />}>
        <Router
          getUserConfirmation={(message, callback) =>
            PromptModal(message, callback)
          }
        >
          <Musicbar />
          <Switch>
            <AboutPlayer exact strict path="/about" />
            <Home exact strict path="/" />
            <RegiFormik exact strict path="/register" />
            <SongList exact strict path="/SongList" />
            <InfoPage exact strict path="/info" />
            <ReachUs exact strict path="/contact" />
            <UserConfirm exact strict path="/userconfirm" />
            <EditUserDetails exact strict path="/editdetails" />
            <ChangePassword exact strict path="/changepassword" />
            <LoginFormik exact strict path="/login" />
            <AddSongFormik exact strict path="/addsong" />
            <UpdateSong exact strict path="/updatesong" />
            <DeleteMultipleSongs exact strict path="/deletesong" />

            <Route
              exact
              strict
              path="/dashboard"
              component={PlaylistDashboard}
            />
            <Route
              exact
              strict
              path="/playlists/:id"
              component={PlaylistViewComponent}
            />
            <Route
              exact
              strict
              path="/playlists/:id/addsongtoplay"
              component={AddSongToPlaylist}
            />
            <Route
              exact
              strict
              path="/playlists/:id/deletesongplaylist"
              component={DeleteSongFromPlaylist}
            />
            <Route
              render={() => (
                <div>
                  <ErrorPage />
                </div>
              )}
            />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default AllRouter;
