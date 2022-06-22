import React, { useRef, useState } from "react";
import { Row, Overlay, Popover } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ThemeButton from "../../components/theme-button/ThemeButton";
import Auth from "../../services/Auth";
import { ThemesProperties } from "../../contexts/ThemeContext.js";
import { BsPersonCircle } from "react-icons/bs";

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

  export default CustomUserProfile;