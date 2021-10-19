import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as GrIcons from "react-icons/gr";
import * as GoIcons from "react-icons/go";
import { SidebarData } from "./SidebarData";
import "../mystyles/Musicbar.css";
import { IconContext } from "react-icons";
import { userLogoutSuccess } from "../redux";
import {
  Modal,
  Button,
  ListGroup,
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import AboutPlayer from "./AboutPlayer";
import { connect } from "react-redux";
import Avatar from "@mui/material/Avatar";

const Musicbar = withRouter(
  ({ history, userData, userLogoutSuccess, ...props }) => {
    const [sidebar, setSidebar] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const [logoutShow, setLogoutShow] = useState(false);
    const handleLogoutShow = () => {
      setLogoutShow(true);
    };
    const handleLogoutClose = () => {
      userLogoutSuccess();
      setLogoutShow(false);
    };

    const showSidebar = () => setSidebar(!sidebar);

    const renderPopOver = (
      <Popover id="popover-basic" {...props}>
        <Popover.Body>
          <Popover.Header as="h3">My Menu</Popover.Header>
          <ListGroup>
            <Link to="/userconfirm">
              <ListGroup.Item action variant="info">
                My Dashboard
              </ListGroup.Item>
            </Link>
            <Link to="#" onClick={handleLogoutShow}>
              <ListGroup.Item action variant="danger">
                Logout
              </ListGroup.Item>
            </Link>
          </ListGroup>
        </Popover.Body>
      </Popover>
    );
    return (
      <>
        <IconContext.Provider value={{ color: "yellow" }}>
          <Navbar sticky="top" className="navbar">
            <Navbar.Brand onClick={showSidebar}>
              {/* <Link className="menu-bars" */}
              {/* <FaIcons.FaBars onClick={showSidebar} /> */}
              <h1 className="navbar-logo">
                Listeni<i>fy</i>
              </h1>
              {/* </Link> */}
            </Navbar.Brand>
            <ul className="sign-menu">
              {userData.isLoggedIn ? (
                <div>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={renderPopOver}
                  >
                    <Navbar.Brand>
                      <Nav.Link
                        className="navbar-login-avatar"
                        onClick={renderPopOver}
                      >
                        <Avatar
                          style={{
                            backgroundColor: "crimson",
                          }}
                          sx={{ width: 50, height: 50 }}
                        >
                          <MdIcons.MdPerson style={{ color: "yellow" }} />
                        </Avatar>
                      </Nav.Link>
                    </Navbar.Brand>
                  </OverlayTrigger>
                </div>
              ) : (
                <Navbar.Brand>
                  <Nav.Link className="navbar-login">
                    <a
                      className="nav-links"
                      target="_blank"
                      onClick={() => setModalShow(true)}
                    >
                      Log In/Sign Up
                    </a>
                  </Nav.Link>
                  <Nav.Link className="navbar-login-person">
                    <a target="_blank" onClick={() => setModalShow(true)}>
                      <GoIcons.GoPerson style={{ width: "30", height: "40" }} />
                    </a>
                  </Nav.Link>
                </Navbar.Brand>
              )}
            </ul>

            <Nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
                    <GrIcons.GrClose style={{ color: "yellow" }} />
                  </Link>
                </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.link}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </Nav>
            <Modal
              show={logoutShow}
              onHide={handleLogoutClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
              </Modal.Header>
              <Modal.Body>Are you sure for Logging Out?</Modal.Body>
              <Modal.Footer>
                <Button
                  variant="info"
                  onClick={() => {
                    handleLogoutClose();
                  }}
                >
                  No,will stay.
                </Button>
                <Link to="/home" onClick={handleLogoutClose}>
                  <Button variant="primary">Yes,Log Out</Button>
                </Link>
              </Modal.Footer>
            </Modal>
          </Navbar>
        </IconContext.Provider>
        <AboutPlayer show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
  }
);

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

export default connect(mapStateToProps, { userLogoutSuccess })(Musicbar);
