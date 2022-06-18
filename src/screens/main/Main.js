import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav, Row, Overlay, Popover, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../App.css";
import Seperator from "../../components/seperator/Seperator";
import ThemeButton from "../../components/theme-button/ThemeButton";
import {
  ThemeContext,
  themes,
  ThemesProperties,
} from "../../contexts/ThemeContext.js";
import LoadingButton from "../../components/loading-button/LoadingButton";
import { BsPersonCircle } from "react-icons/bs";
import { IsString } from "../../utilities/Validator";

function Main(props) {
  const [showProfile, setShowProfile] = useState(false);
  const navbarRef = useRef(null);
  const profileButtonRef = useRef(null);

  const handleShowProflileClick = (event) => {
    setShowProfile(!showProfile);
  };

  return (
    <div style={{ height: "100vh" }}>
      <ThemeContext.Consumer>
        {({ theme }) =>
          ((theme === undefined || !IsString(theme)) && (
            <h1>Loading...</h1>
          )) || (
            <div>
              <Navbar
                className="p-2 m-0"
                variant={ThemesProperties[theme].variant}
                expand="lg"
                ref={navbarRef}
                collapseOnSelect="true"
              >
                <Navbar.Brand className="d-none d-lg-block">
                  <Link
                    className={ThemesProperties[theme].textClassName}
                    style={{
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    Note Here
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle
                  variant={ThemesProperties[theme].variant}
                  aria-controls="basic-navbar-nav"
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-navbar`}
                  placement="start"
                  style={{
                    backgroundColor: ThemesProperties[theme].backgroundColor,
                    color: ThemesProperties[theme].color,
                  }}
                >
                  <Offcanvas.Header
                    className="m-0 p-3 pb-0 p-lg-0"
                    closeButton
                    closeVariant={ThemesProperties[theme].closeButtonVariant}
                  >
                    <Offcanvas.Title
                      className={ThemesProperties[theme].bgClassName}
                      id={`offcanvasNavbarLabel-expand-navbar`}
                    >
                      Note Here
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body
                    className="m-0 p-3 pt-3 p-lg-0"
                    style={{
                      backgroundColor: ThemesProperties[theme].backgroundColor,
                      color: ThemesProperties[theme].color,
                    }}
                  >
                    <Nav className="me-auto">
                      <Nav.Link href="#dashboard">Dashboard</Nav.Link>
                      <Nav.Link href="#note">Note</Nav.Link>
                      <Nav.Link href="#todo">To-Do</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
                {/* Profile Button */}
                <button
                  className={"btn-" + ThemesProperties[theme].variant}
                  style={{ border: "1px solid transparent" }}
                  onClick={handleShowProflileClick}
                  ref={profileButtonRef}
                >
                  <BsPersonCircle className="m-0 p-0" size="1.5em" />
                </button>
                <Overlay
                  show={showProfile}
                  target={profileButtonRef}
                  placement="bottom"
                  container={navbarRef}
                  rootClose="true"
                  onHide={handleShowProflileClick}
                >
                  <Popover
                    id="profile-popover"
                    className={"p-0 " + ThemesProperties[theme].bgClassName}
                  >
                    <Popover.Body>
                      <Row className="p-0 mb-1 text-align-left">
                        <button
                          className={
                            "m-0 p-0 btn-" + ThemesProperties[theme].variant
                          }
                          style={{
                            border: "none",
                            boxShadow: "none",
                          }}
                        >
                          Bo Chansothea
                        </button>
                      </Row>
                      <Row>
                        <ThemeButton className="m-0 mt-1 p-0 sm-order-0" />
                        <Link
                          className={"btn-" + ThemesProperties[theme].variant}
                          style={{
                            textDecoration: "none",
                            border: "none",
                            boxShadow: "none",
                          }}
                          to="/login"
                        >
                          Logout
                        </Link>
                      </Row>
                    </Popover.Body>
                  </Popover>
                </Overlay>
              </Navbar>
              <Seperator />
              <div
                className="col col-sm-12 col-md-3 col-lg-3 col-xlg-3 m-0-auto"
                style={{
                  height: `calc(93vh)`,
                  overflow: "auto",
                }}
              >
                <div>
                  <div
                    className="card m-1 p-1 shadow-sm btn btn-primary"
                    style={{
                      backgroundColor: ThemesProperties[theme].backgroundColor,
                      border: "1px solid",
                      borderColor: ThemesProperties[theme].color,
                      color: ThemesProperties[theme].color,
                      textAlign: "left",
                    }}
                    onClick={() => {
                      console.info("Clicked card");
                    }}
                  >
                    <h6>Title One</h6>
                    <Seperator />
                    <p>"But I must explain to you how all this mistaken...</p>
                  </div>
                  <div
                    className="card m-1 m-1 p-1 shadow-sm btn btn-primary"
                    style={{
                      backgroundColor: ThemesProperties[theme].backgroundColor,
                      border: "1px solid",
                      borderColor: ThemesProperties[theme].color,
                      color: ThemesProperties[theme].color,
                      textAlign: "left",
                    }}
                  >
                    <h6>Title Two</h6>
                    <Seperator />
                    <p>"But I must explain to you how all this mistaken...</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </ThemeContext.Consumer>
    </div>
  );
}

export default Main;
