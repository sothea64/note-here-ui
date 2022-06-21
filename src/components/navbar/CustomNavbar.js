import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav, Row, Overlay, Popover, Offcanvas } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import "../../App.css";
import ThemeButton from "../../components/theme-button/ThemeButton";
import { ThemeContext, ThemesProperties } from "../../contexts/ThemeContext.js";
import { BsPersonCircle } from "react-icons/bs";
import {
  IsString,
  IsStringNotUndefinedOrEmpty,
} from "../../utilities/Validator";
import Auth from "../../logic/Auth";

function CustomNavbar(props) {
  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const navbarCanvasRef = useRef(null);

  const closeNavOffCanvas = (route) => {
    if (navbarCanvasRef.current.backdrop !== undefined) {
      navbarCanvasRef.current.backdrop.click();
    }
    if (IsStringNotUndefinedOrEmpty(route)) {
      navigate(route);
    }
  };

  useEffect(() => {
    // console.info("Init navba");
  }, [navbarRef]);

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
              {/* Nav Brand */}
              <Navbar.Brand className="d-none d-lg-block mb-1">
                <CustomNavBrand theme={theme} onClick={closeNavOffCanvas} />
              </Navbar.Brand>
              {/* Nav Toggle */}
              <Navbar.Toggle
                variant={ThemesProperties[theme].variant}
                aria-controls="basic-navbar-nav"
              />
              {/* Nav OffCanvas */}
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
                  {/* NavLinks */}
                  <Nav
                    className={
                      "me-auto d-flex " + ThemesProperties[theme].variant
                    }
                  >
                    <CustomNavItem to="/dashboard">Dashboard</CustomNavItem>
                    <CustomNavItem to="/note">Note</CustomNavItem>
                    <CustomNavItem to="/todo">ToDo</CustomNavItem>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
              {/* Profile Button */}
              <CustomUserProfile theme={theme} container={navbarRef} />
            </Navbar>
          </div>
        )
      }
    </ThemeContext.Consumer>
  );
}

export function CustomNavItem(props) {
  const navLinkRef = useRef(null);

  useEffect(() => {
    console.log(navLinkRef.isActive);
  }, [navLinkRef.isActive]);

  return (
    <>
      <NavLink
        className="p-2 nav-item nav-link"
        exact="true"
        to={props.to}
        replace="true"
        ref={navLinkRef}
      >
        {props.children}
      </NavLink>
    </>
  );
}

export function CustomUserProfile(props) {
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const profileButtonRef = useRef(null);

  const handleShowProflileClick = (event) => {
    setShowProfile(!showProfile);
  };

  const handleLogOut = (e) => {
    Auth.Logout();
    navigate("/login");
  };

  return (
    <>
      <button
        className={"btn-" + ThemesProperties[props.theme].variant}
        style={{ border: "1px solid transparent", margin: "1px" }}
        onClick={handleShowProflileClick}
        ref={profileButtonRef}
      >
        <BsPersonCircle className="m-0 p-0" size="1.5em" />
      </button>
      <Overlay
        show={showProfile}
        target={profileButtonRef}
        placement="bottom"
        container={props.container}
        rootClose="true"
        onHide={handleShowProflileClick}
      >
        <Popover
          id="profile-popover"
          className={"p-0 " + ThemesProperties[props.theme].bgClassName}
        >
          <Popover.Body>
            <Row className="p-0 mb-1 text-align-left">
              <button
                className={
                  "m-0 p-0 btn-" + ThemesProperties[props.theme].variant
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
              <div
                className={
                  "btn btn-sm btn-" + ThemesProperties[props.theme].variant
                }
                style={{
                  textDecoration: "none",
                  border: "none",
                  boxShadow: "none",
                }}
                onClick={handleLogOut}
              >
                Logout
              </div>
            </Row>
          </Popover.Body>
        </Popover>
      </Overlay>
    </>
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
      onClick={() => props.onClick("/dashboard")}
    >
      Note Here
    </div>
  );
}

export default CustomNavbar;
