import React, { useEffect, useRef, useState } from "react";
import { Navbar, Nav, Row, Overlay, Popover, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { ThemeContext, ThemesProperties } from "../../contexts/ThemeContext.js";
import {
  IsString,
  IsStringNotUndefinedOrEmpty,
} from "../../utilities/Validator";
import CustomNavItem from "./CustomNavItem";
import CustomUserProfile from "./CustomeUserProfile";
import CustomNavBrand from "./CustomNavBrand";

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

export default CustomNavbar;
