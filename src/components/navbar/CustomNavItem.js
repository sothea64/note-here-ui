import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
        ref={navLinkRef}
      >
        {props.children}
      </NavLink>
    </>
  );
}

export default CustomNavItem;
