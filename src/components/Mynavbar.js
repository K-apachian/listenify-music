import React, { useEffect, useState } from "react";
import {
  Navbar,
  Button,
  Nav,
  Tooltip,
  OverlayTrigger,
  Offcanvas,
} from "react-bootstrap";
import "../mystyles/Mynavbar.css";
import { Link } from "react-router-dom";
import spotify from "../images/spotify.png";
import AboutPlayer from "./AboutPlayer";
import { connect } from "react-redux";

const Mynavbar = ({ userData, ...props }) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <b>Any Time Know More About App</b>
    </Tooltip>
  );

  //OFFCANVAS FOR NAVBAR BRAND GIVEN

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  // const Example = (props) => (
  //   <>
  //     <Offcanvas
  //       width={300}
  //       transitionDuration={300}
  //       postion={"left"}
  //       effect={"overlay"}
  //       show={show}
  //       onHide={handleClose}
  //       {...props}
  //     >
  //       <Offcanvas.Header closeButton>
  //         <Offcanvas.Title>
  //           <h3>Welcome To Music Player</h3>
  //         </Offcanvas.Title>
  //       </Offcanvas.Header>
  //       <Offcanvas.Body>
  //         Some text as placeholder. In real life you can have the elements you
  //         have chosen. Like, text, images, lists, etc.
  //         <div>
  //           <ul style={{ listStyleType: "none" }}>
  //             <li>
  //               <Link to="/dashboard">
  //                 <Button variant="outline-light">Jump To Playlist</Button>
  //               </Link>
  //             </li>
  //             <li>
  //               <Link to="/">
  //                 <Button variant="outline-dark">Back To Home</Button>
  //               </Link>
  //             </li>

  //             <a href="#">Services</a>
  //             <a href="#">Clients</a>
  //             <a href="#">Contact</a>
  //           </ul>
  //         </div>
  //       </Offcanvas.Body>
  //     </Offcanvas>
  //   </>
  // );

  // useEffect(() => renderTooltip());

  const [user, setUser] = useState(userData.user);
  const [modalShow, setModalShow] = useState(false);

  
  return (
    <div>
      {/* <Example /> */}
      <Navbar expand="lg" bg="dark" variant="light" className="mynavbar">
        <Navbar.Brand className="App-head" href="/home">
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
          >
            <Link
              //onMouseOver={() => renderTooltip()}
              // onClick={handleShow}
              style={{ textDecoration: "none" }}
              to="/"
            >
              <h2>
                Listeni<i>fy</i>
              </h2>
            </Link>
          </OverlayTrigger>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto"></Nav>
          <Nav className="navlist" navbarScroll>
            <Nav.Link>
              <Link to="/register">
                <Button variant="outline-primary">Register</Button>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">
                <Button variant="outline-danger">Log In</Button>
              </Link>
            </Nav.Link>

            {userData.isLoggedIn && (
              <Nav.Link>
                <Link to="/userconfirm">
                  <Button variant="outline-light">View Profile</Button>
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <AboutPlayer show={modalShow} onHide={() => setModalShow(false)} /> */}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
export default connect(mapStateToProps)(Mynavbar);
