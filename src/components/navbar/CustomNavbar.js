import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav, Row, Overlay, Popover, Offcanvas } from "react-bootstrap";
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import "../../App.css";
import Seperator from "../../components/seperator/Seperator";
import ThemeButton from "../../components/theme-button/ThemeButton";
import { ThemeContext, ThemesProperties } from "../../contexts/ThemeContext.js";
import { BsPersonCircle } from "react-icons/bs";
import { IsString } from "../../utilities/Validator";

function CustomNavbar(props) {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const navbarRef = useRef(null);
  const profileButtonRef = useRef(null);
  const navbarCanvasRef = useRef(null);

  const handleShowProflileClick = (event) => {
    setShowProfile(!showProfile);
  };

  const closeNavOffCanvas = (e) => {
    if (navbarCanvasRef.current.backdrop !== undefined) {
      navbarCanvasRef.current.backdrop.click();
    }
    navigate("/");
  };

  return (
    <ThemeContext.Consumer>
      {({ theme }) =>
        ((theme === undefined || !IsString(theme)) && <h1>Loading...</h1>) || (
          <div>
            <Navbar
              className="p-2 pt-1 pb-1 m-0"
              variant={ThemesProperties[theme].variant}
              expand="lg"
              ref={navbarRef}
              collapseOnSelect="true"
            >
              <Navbar.Brand className="d-none d-lg-block">
                <CustomNavBrand theme={theme} onClick={closeNavOffCanvas} />
              </Navbar.Brand>
              <Navbar.Toggle
                variant={ThemesProperties[theme].variant}
                aria-controls="basic-navbar-nav"
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-navbar`}
                placement="start"
                ref={navbarCanvasRef}
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
                    <CustomNavBrand theme={theme} onClick={closeNavOffCanvas} />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body
                  className="m-0 p-3 pt-3 p-lg-0"
                  style={{
                    backgroundColor: ThemesProperties[theme].backgroundColor,
                    color: ThemesProperties[theme].color,
                  }}
                >
                  <Nav className={"me-auto d-flex" + ThemesProperties[theme].variant}>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                    <NavLink to="/note">Note</NavLink>
                    <NavLink to="/todo">ToDo</NavLink>
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
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
}

export function CustomNavBrand(props) {
  return (
    <div
      className={
        "navbar-brand m-0 p-1 btn bt- " +
        ThemesProperties[props.theme].textClassName
      }
      style={{
        textDecoration: "none",
        border: "none",
        boxShadow: "none",
      }}
      onClick={props.onClick}
    >
      Note Here
    </div>
  );
}

export function CustomNavUserProfile() {}

export default CustomNavbar;
